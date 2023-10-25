const users = require("../models/userModel")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

module.exports = {
    createUser : (async(req,res) => {
        const {email,password} = req.body
        try {
            const found = await users.findOne({email})
            if (found){
                res.status(404).send({message:` ${email} already have an account `})
            }
            else {
                const oneUser = new users(req.body)
                const salt = 10
                const hashPwd = await bcrypt.hash(password, salt)
                oneUser.password = hashPwd
                const data = {id:oneUser._id}
                const token = jwt.sign(data, "jwtSecretKey")
                await oneUser.save()
                res.status(200).send({message:"Account created with success", user:oneUser, token:token})
            }
        } catch (error) {
            res.status(500).send(error)
        }
    }),

    login : (async(req,res) => {
        const {email,password} = req.body
        try {
            const check = await users.findOne({email})
            if (!check){
                res.status(404).send({message:`Invalid e-mail adress ${email} you don't have an account`})
            }
            else {
                const compare = bcrypt.compareSync(password, check.password)
                if (!compare){
                    res.status(404).send({message:"Wrong password"})
                }
                else {
                    const payload = {id:check._id}
                    const token = jwt.sign(payload, "jwtSecretKey")
                    res.status(200).send({message:"login success", user:check, token:token})
                }
            }
        } catch (error) {
            res.status(500).send(error)
        }
    }), 

    getOneUser : (async(req, res, id) => {
        try {
            const user = await users.findById(id)
            res.status(200).send({message:"user", user:user})
        } catch (error) {
            res.status(500).send(error)
        }
    })
}