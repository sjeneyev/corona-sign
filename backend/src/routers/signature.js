const express = require("express");
const upload = require("../middleware/upload");
const router = new express.Router();
const Signature = require("../models/signature");

// TODO: Get Route to retrieve daily and send email
// TODO: Get Route to retrieve daily/weekly/monthly

router.post("/signature", upload.single("signature"), async (req, res) => {
    const signature = new Signature(req.body);
    signature.signature.contentType = "image/jpg";
    try {
        await signature.save();
        res.status(200).send({ signature });
    } catch (error) {
        res.status(401).send(error.message);
    }
});

router.get("/signatures", async (req, res) => {
    try {
        const signatures = await Signature.findOne({});
        res.set("Content-Type", "image/jpg");
        res.status(200).send(signatures);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
