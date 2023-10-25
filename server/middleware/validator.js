const { body, validationResult} = require("express-validator")

exports.registerValidation = [
    body("email", "Please enter valide email").isEmail(),
    body("password", "please enter password more than 8 characters").isLength({min:8})
]

exports.loginValidation = [
    body("email", "Please enter valide email").isEmail(),
    body("password", "please enter password more than 8 characters").isLength({min:8})
]

exports.validation = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).send({errors:errors.array()})
    }
    next()
}