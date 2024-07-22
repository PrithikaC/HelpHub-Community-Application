const router = require("express").Router();
const { Employee, validateEmployee } = require("../models/employee");
const { ServiceProvider } = require("../models/serviceProvider");
const authMiddleware = require("../middleware/auth");

// Add an employee
router.post("/", authMiddleware, async (req, res) => {
    try {
        const { error } = validateEmployee(req.body);
        if (error) return res.status(400).send({ message: error.details[0].message });

        const serviceProvider = await ServiceProvider.findById(req.body.serviceProvider);
        if (!serviceProvider) return res.status(404).send({ message: "Service Provider not found" });

        const employee = new Employee(req.body);
        await employee.save();

        serviceProvider.employees.push(employee._id);
        await serviceProvider.save();

        res.status(201).send({ message: "Employee added successfully", employee });
    } catch (error) {
        res.status(500).send({ message: "Internal server error" });
    }
});

// Get employees of a service provider
router.get("/:serviceProviderId", authMiddleware, async (req, res) => {
    try {
        const employees = await Employee.find({ serviceProvider: req.params.serviceProviderId });
        res.status(200).send(employees);
    } catch (error) {
        res.status(500).send({ message: "Internal server error" });
    }
});

// Update an employee
router.put("/:id", authMiddleware, async (req, res) => {
    try {
        const { error } = validateEmployee(req.body);
        if (error) return res.status(400).send({ message: error.details[0].message });

        const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!employee) return res.status(404).send({ message: "Employee not found" });

        res.status(200).send({ message: "Employee updated successfully", employee });
    } catch (error) {
        res.status(500).send({ message: "Internal server error" });
    }
});

// Delete an employee
router.delete("/:id", authMiddleware, async (req, res) => {
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id);
        if (!employee) return res.status(404).send({ message: "Employee not found" });

        const serviceProvider = await ServiceProvider.findById(employee.serviceProvider);
        if (serviceProvider) {
            serviceProvider.employees.pull(employee._id);
            await serviceProvider.save();
        }

        res.status(200).send({ message: "Employee deleted successfully" });
    } catch (error) {
        res.status(500).send({ message: "Internal server error" });
    }
});

module.exports = router;
