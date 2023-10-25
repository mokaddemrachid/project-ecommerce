const mongoose = require('mongoose')

const connectDB = async() => {
    try {
        mongoose.connect('mongodb+srv://rachidmokaddem068:26608648@cluster0.hgauyqy.mongodb.net/?retryWrites=true&w=majority')
        console.log("Database Connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB