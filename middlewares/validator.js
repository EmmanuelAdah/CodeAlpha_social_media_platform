
const Joi = require("joi");

exports.signupSchema = Joi.object({
    email: Joi.string()
        .min(6)
        .max(50)
        .required()
        .email({ tlds: { allow: ['com', 'net'] } }),

    password: Joi.string()
        .required()
        .pattern(new RegExp(`^(?=.*[A-Za-z])(?=.*\\d)(?=.*[^A-Za-z0-9]).{6,30}$`))
        .messages({
            "string.pattern.base": "Password must be exactly 6 characters and include letters, numbers, and symbols."
        })
});