const path = require('path');
const express = require('express');
const cors = require('cors');
require('../db/mongoose');
const employeeRouter = require('./routers/employee');
const signatureRouter = require('./routers/signature');
const fs = require('fs');
const Signature = require('./models/signature');
const { sendDailyEmail } = require('./emails/account');
const { ExportToCsv } = require('export-to-csv');
const app = express();
const publicDirectory = path.join(__dirname, '../public');
app.use(express.static(publicDirectory));

const cron = require('node-cron');

app.use(cors());
app.use(express.json());
app.use(employeeRouter);
app.use(signatureRouter);

cron.schedule('17 00 * * *', async () => {
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
            ('00' + (date.getMonth() + 1)).slice(-2) +
            '/' +
            ('00' + date.getDate()).slice(-2) +
            '/' +
            date.getFullYear() +
            ' ' +
            ('00' + date.getHours()).slice(-2) +
            ':' +
            ('00' + date.getMinutes()).slice(-2) +
            ':' +
            ('00' + date.getSeconds()).slice(-2);
        data.push({
            'שעת חתימה': dateTime,
            'תעודת זהות': item.idNumber,
            'שם מלא': item.fullName,
        });
    });
    const options = {
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalSeparator: '.',
        showLabels: true,
        showTitle: true,
        title: 'דוח חתימות יומי',
        useTextFile: false,
        useBom: true,
        useKeysAsHeaders: true,
    };
    const csvExporter = new ExportToCsv(options);
    const x = csvExporter.generateCsv(data, true);
    await fs.writeFileSync('data.csv', x);
    sendDailyEmail('segev.sergey@gmail.com', 'Panda', 'data.csv');
    await fs.unlinkSync('data.csv');
    res.status(200).send('email');
});
module.exports = app;
