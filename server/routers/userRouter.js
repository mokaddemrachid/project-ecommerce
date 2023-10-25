const router = require("express").Router()
const userControler = require("../controlers/user")
const { isAuth } = require("../middleware/isAuth")
const { registerValidation, validation, loginValidation } = require("../middleware/validator")

router.post('/api/createUser', registerValidation, validation, userControler.createUser)

router.post('/api/login', loginValidation, validation, userControler.login)

router.get('/api/getCurrentUser', isAuth,(req, res) => {
    res.send({user:req.user})
})

module.exports = { userRouter : router }