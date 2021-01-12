const mongoose = require("mongoose");

const signatureSchema = mongoose.Schema(
    {
        // TODO: create the model
        fullName: {
            type: String,
            required: true,
        },
        idNumber: {
            type: Number,
            required: true,
        },
        signature: {
            required: true,
            type: Boolean,
        },
    },
    {
        timestamps: true,
    }
);

const Signature = mongoose.model("Signature", signatureSchema);

module.exports = Signature;
