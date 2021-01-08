const mongoose = require("mongoose");

const signatureSchema = mongoose.Schema(
    {
        // TODO: create the model
        fullName: {
            type: String,
            trim: true,
            required: true,
        },
        idNumber: {
            type: Number,
            required: true,
        },
        signature: {
            type: Buffer,
        },
    },
    {
        timestamps: true,
    }
);

const Signature = mongoose.model("Signature", signatureSchema);

module.exports = Signature;
