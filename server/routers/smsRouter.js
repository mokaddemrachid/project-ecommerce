const router=require("express").Router()
const sms = require("../controlers/sms")

router.post("/api/smsPost", sms.sendSms)

module.exports = {smsRouter:router}