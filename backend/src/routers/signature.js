const express = require('express');
const upload = require('../middleware/upload');
const router = new express.Router();
const Signature = require('../models/signature');
const fs = require('fs');

const { sendDailyEmail } = require('../emails/account');
const { ExportToCsv } = require('export-to-csv');

// TODO: Get Route to retrieve daily and send email
// TODO: Get Route to retrieve daily/weekly/monthly

router.post('/signature', upload.single('signature'), async (req, res) => {
    const signature = new Signature(req.body);
    try {
        await signature.save();
        res.status(200).send({ signature });
    } catch (error) {
        res.status(401).send(error.message);
    }
});

router.get('/signatures', async (req, res) => {
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

module.exports = router;
