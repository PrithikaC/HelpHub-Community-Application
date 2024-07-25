const express = require("express");
const router = express.Router();
const { ServiceProvider, validateServiceProvider } = require("../models/serviceProvider");
const bcrypt = require("bcrypt");

// Route to create a new service provider
router.post("/", async (req, res) => {
    try {
        const { error } = validateServiceProvider(req.body);
        if (error) {
            return res.status(400).send({ message: error.details[0].message });
        }
        
        const existingServiceProvider = await ServiceProvider.findOne({ email: req.body.email });
        if (existingServiceProvider) {
            return res.status(409).send({ message: "Service provider with given email already exists" });
        }

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        await new ServiceProvider({ ...req.body, password: hashPassword }).save();
        res.status(201).send({ message: "Service provider created successfully" });
    } catch (error) {
        res.status(500).send({ message: "Internal server error" });
    }
});

// Route to check if service provider exists
router.get('/exists/:id', async (req, res) => {
    try {
        const serviceProvider = await ServiceProvider.findById(req.params.id);
        if (serviceProvider) {
            res.status(200).send({ exists: true });
        } else {
            res.status(404).send({ exists: false });
        }
    } catch (error) {
        res.status(500).send({ message: "Internal server error" });
    }
});

// Route to get service provider details
router.get("/:id", async (req, res) => {
    try {
        const serviceProvider = await ServiceProvider.findById(req.params.id).select('firstName lastName email phoneNumber city serviceType experience');
        if (serviceProvider) {
            res.status(200).send(serviceProvider);
        } else {
            res.status(404).send({ message: "Service provider not found" });
        }
    } catch (error) {
        res.status(500).send({ message: "Internal server error" });
    }
});

// Route to update service provider profile
router.post('/updateProfile', async (req, res) => {
    const { _id, firstName, lastName, email, phoneNumber, city, serviceType, experience } = req.body;

    try {
        const serviceProvider = await ServiceProvider.findById(_id);
        if (!serviceProvider) {
            return res.status(404).json({ success: false, message: 'Service provider not found' });
        }

        serviceProvider.firstName = firstName;
        serviceProvider.lastName = lastName;
        serviceProvider.email = email;
        serviceProvider.phoneNumber = phoneNumber;
        serviceProvider.city = city;
        serviceProvider.serviceType = serviceType;
        serviceProvider.experience = experience;

        await serviceProvider.save();

        res.json({ success: true, message: 'Profile updated successfully' });
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ success: false, message: 'Server error: ' + error.message });
    }
});
// Route to get all service providers
router.get("/", async (req, res) => {
    try {
        const serviceProviders = await ServiceProvider.find().select('-password'); // Exclude password field
        res.status(200).send(serviceProviders);
    } catch (error) {
        res.status(500).send({ message: "Internal server error" });
    }
});


module.exports = router;
