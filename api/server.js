const express = require("express")
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const app = express()

// mongoose.set('strictQuery', true)
dotenv.config();
const connect = async () => {
    try {
        mongoose.connect(process.env.MONGO)
        console.log("connected");
    }
    catch (error) {
        console.log(error)
    }
}

app.listen(8800, () => {
    console.log("Back-end server is running");
})