const router=require("express").Router()
const payment = require("../controlers/payment")

router.post('/api/payment', payment.payments)

module.exports = {paymentRouter:router}