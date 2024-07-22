const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    position: { type: String, required: true },
    serviceProvider: { type: mongoose.Schema.Types.ObjectId, ref: 'ServiceProvider', required: true }
});

const Employee = mongoose.model("Employee", employeeSchema);

const validateEmployee = (data) => {
    const schema = Joi.object({
        firstName: Joi.string().required().label("First Name"),
        lastName: Joi.string().required().label("Last Name"),
        email: Joi.string().email().required().label("Email"),
        phoneNumber: Joi.string().required().label("Phone Number"),
        position: Joi.string().required().label("Position"),
        serviceProvider: Joi.string().required().label("Service Provider")
    });
    return schema.validate(data);
};

module.exports = { Employee, validateEmployee };
