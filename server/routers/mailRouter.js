const router=require("express").Router()
const mail=require("../controlers/mail")

router.post("/api/mail", mail.sendmail)

module.exports={mailRouter:router}