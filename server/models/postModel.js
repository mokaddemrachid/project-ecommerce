const mongoose = require("mongoose")

const Poste = new mongoose.Schema({
    name : String,
    description : String,
    price : Number,
    category : String,
    image : String,
    gender : String
})

module.exports = mongoose.model("post", Poste)