const jwt = require("jsonwebtoken")
const users = require("../models/userModel")

exports.isAuth = async(req, res, next) => {
    try {
        const token = req.header("token")
        const dcode = jwt.verify(token, "jwtSecretKey")
        if (!dcode) {
            res.status(400).send({message:"Unauthorized"})
        }
        else {
            const user = await users.findById(dcode.id)
            req.user = user
            
        }
    } catch (error) {
        res.status(500).send(error)
    }
    next()
}