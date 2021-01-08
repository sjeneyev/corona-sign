const mongoose = require("mongoose");

const signatureSchema = mongoose.Schema({})


const Signature = mongoose.model("Signature", signatureSchema);

module.exports = Signature;
