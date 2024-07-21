const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");

// Route to create a new user
router.post("/", async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error) {
            return res.status(400).send({ message: error.details[0].message });
        }
        
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(409).send({ message: "User with given email already exists" });
        }

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        await new User({ ...req.body, password: hashPassword }).save();
        res.status(201).send({ message: "User created successfully" });
    } catch (error) {
        res.status(500).send({ message: "Internal server error" });
    }
});

// Route to check if user exists
router.get('/exists/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (user) {
            res.status(200).send({ exists: true });
        } else {
            res.status(404).send({ exists: false });
        }
    } catch (error) {
        res.status(500).send({ message: "Internal server error" });
    }
});

// Route to get user details
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('email firstName lastName'); // Fetch email, firstName, lastName
        if (user) {
            res.status(200).send(user);
        } else {
            res.status(404).send({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).send({ message: "Internal server error" });
    }
});

// Route to update profile
router.post('/updateProfile', async (req, res) => {
    const { _id, firstname, lastname, email } = req.body;

    try {
        const user = await User.findById(_id);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        user.firstName = firstname;
        user.lastName = lastname;
        user.email = email;

        await user.save();

        res.json({ success: true, message: 'Profile updated successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error: ' + error.message });
    }
});

module.exports = router;
