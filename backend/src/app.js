const express = require("express");
const cors = require("cors");
require("../db/mongoose");
// const bodyParser = require("body-parser");
const employeeRouter = require("./routers/employee");
const signatureRouter = require("./routers/signature");
const app = express();

// app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(employeeRouter);
app.use(signatureRouter);
module.exports = app;
