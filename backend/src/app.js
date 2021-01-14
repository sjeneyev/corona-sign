const path = require("path");
const express = require("express");
const cors = require("cors");
require("../db/mongoose");
const employeeRouter = require("./routers/employee");
const signatureRouter = require("./routers/signature");
const app = express();
const publicDirectory = path.join(__dirname, "../public");

app.use(express.static(publicDirectory));
app.use(cors());
app.use(express.json());
app.use(employeeRouter);
app.use(signatureRouter);
module.exports = app;
