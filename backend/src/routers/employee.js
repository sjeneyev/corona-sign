const express = require("express");
const router = new express.Router();
const Employee = require("../models/employee");
const Signature = require("../models/signature");

// TODO: Post route to add employee
// TODO: Get route to retrieve all employees

router.get("/employees", async (req, res) => {
    try {
        const employees = await Employee.find({});
        const start = new Date();
        start.setHours(0, 0, 0, 0);
        const end = new Date();
        end.setHours(23, 59, 59, 999);
        const signatures = await Signature.find({
            createdAt: { $gte: start, $lt: end },
        });

        const result = employees.filter(
            ({ idNumber: id1 }) =>
                !signatures.some(({ idNumber: id2 }) => id2 === id1)
        );
        console.log(result);

        res.status(200).send(result);
    } catch (error) {
        res.status(404).send(error);
    }
});

router.post("/employee", async (req, res) => {
    const employee = new Employee(req.body);
    try {
        await employee.save();
        res.status(201).send({ employee });
    } catch (e) {
        res.status(400).send(e);
    }
});

module.exports = router;
