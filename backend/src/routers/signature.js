const express = require("express");
const upload = require("../middleware/upload");
const router = new express.Router();
const Signature = require("../models/signature");

// TODO: Post route to add signature
// TODO: Get Route to retrieve daily and send email
// TODO: Get Route to retrieve daily/weekly/monthly

router.post("/signature", upload.single("signature"), async (req, res) => {
    const signature = new Signature(req.body);
    console.log(signature);
    try {
        await signature.save();
        res.status(200).send({ signature });
    } catch (error) {
        res.status(401).send(error.message);
    }
});

module.exports = router;
