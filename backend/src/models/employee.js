const mongoose = require("mongoose");
const validator = require("validator");

const employeeSchema = mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: true,
    },
    lastName: { type: String, trim: true, required: true },
    idNumber: {
        type: Number,
        required: true,
        unique: true,
        validate(value) {
            if (
                typeof value !== "number" ||
                value < 1000000 ||
                value > 999999999
            ) {
                throw new Error("INVALID_ID");
            }
        },
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("INVALID_EMAIL");
            }
        },
    },
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
