const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const serviceProviderSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    city: { type: String, required: true },
    serviceType: { type: String, required: true },
    experience: { type: Number, required: true }
});

serviceProviderSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, { expiresIn: "7d" });
    return token;
};

const ServiceProvider = mongoose.model("ServiceProvider", serviceProviderSchema);

const validateServiceProvider = (data) => {
    const schema = Joi.object({
        firstName: Joi.string().required().label("First Name"),
        lastName: Joi.string().required().label("Last Name"),
        email: Joi.string().email().required().label("Email"),
        password: passwordComplexity().required().label("Password"),
        phoneNumber: Joi.string().required().label("Phone Number"),
        city: Joi.string().required().label("City"),
        serviceType: Joi.string().required().label("Service Type")
    });
    return schema.validate(data);
};

module.exports = { ServiceProvider, validateServiceProvider };
