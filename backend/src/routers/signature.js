const express = require("express");
const upload = require("../middleware/upload");
const router = new express.Router();
const Signature = require("../models/signature");
const fs = require("fs");

const { sendDailyEmail } = require("../emails/account");
const { ExportToCsv } = require("export-to-csv");

// TODO: Get Route to retrieve daily and send email
// TODO: Get Route to retrieve daily/weekly/monthly

router.post("/signature", upload.single("signature"), async (req, res) => {
    const signature = new Signature(req.body);
    try {
        await signature.save();
        res.status(200).send({ signature });
    } catch (error) {
        res.status(401).send(error.message);
    }
});

router.get("/signatures", async (req, res) => {
    try {
        const start = new Date();
        start.setHours(0, 0, 0, 0);
        const end = new Date();
        end.setHours(23, 59, 59, 999);

        const signatures = await Signature.find({
            createdAt: { $gte: start, $lt: end },
        });

        res.status(200).send(signatures);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get("/testmail", async (req, res) => {
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const end = new Date();
    end.setHours(23, 59, 59, 999);
    const signatures = await Signature.find({
        createdAt: { $gte: start, $lt: end },
    });

    let data = [];
    signatures.forEach((item) => {
        let date = new Date(item.createdAt);
        const dateTime =
            ("00" + (date.getMonth() + 1)).slice(-2) +
            "/" +
            ("00" + date.getDate()).slice(-2) +
            "/" +
            date.getFullYear() +
            " " +
            ("00" + date.getHours()).slice(-2) +
            ":" +
            ("00" + date.getMinutes()).slice(-2) +
            ":" +
            ("00" + date.getSeconds()).slice(-2);
        data.push({
            "שעת חתימה": dateTime,
            "תעודת זהות": item.idNumber,
            "שם מלא": item.fullName,
        });
    });
    const options = {
        fieldSeparator: ",",
        quoteStrings: '"',
        decimalSeparator: ".",
        showLabels: true,
        showTitle: true,
        title: "דוח חתימות יומי",
        useTextFile: false,
        useBom: true,
        useKeysAsHeaders: true,
    };
    const csvExporter = new ExportToCsv(options);
    const x = csvExporter.generateCsv(data, true);
    await fs.writeFileSync("data.csv", x);
    sendDailyEmail("segev.sergey@gmail.com", "Sergey Test", "data.csv");
    await fs.unlinkSync("data.csv");
    res.status(200).send("email");
});

module.exports = router;
