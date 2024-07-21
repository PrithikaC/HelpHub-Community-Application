const router = require("express").Router();
const { ServiceProvider } = require("../models/serviceProvider");
const Joi = require("joi");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error) {
            return res.status(400).send({ message: error.details[0].message });
        }
        
        const serviceProvider = await ServiceProvider.findOne({ email: req.body.email });
        if (!serviceProvider) {
            return res.status(401).send({ message: "Invalid email or password" });
        }

        const validPassword = await bcrypt.compare(req.body.password, serviceProvider.password);
        if (!validPassword) {
            return res.status(401).send({ message: "Invalid email or password" });
        }

        const token = serviceProvider.generateAuthToken();
        res.status(200).send({ data: token, message: "Logged In Successfully" });
    } catch (error) {
        res.status(500).send({ message: "Internal server error" });
    }
});

const validate = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label("Email"),
        password: Joi.string().required().label("Password"),
    });
    return schema.validate(data);
};

module.exports = router;
