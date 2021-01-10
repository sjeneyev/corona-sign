const express = require("express");
const router = new express.Router();
const Employee = require("../models/employee");

// TODO: Post route to add employee
// TODO: Get route to retrieve all employees

router.get("/employees", async (req, res) => {
    try {
        const employees = await Employee.find({});
        res.status(200).send(employees);
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
