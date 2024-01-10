const express = require("express")
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const app = express()
const userRoute = require("./routes/user.route")
const gigRoute = require("./routes/gig.route")
const messageRoute = require("./routes/message.route")
const orderRoute = require("./routes/order.route")
const conversationRoute = require("./routes/conversation.route")
const reviewRoute = require("./routes/review.route")
const authRoute = require("./routes/auth.route")


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

app.use("/api/users",userRoute)
app.use("/api/auth",authRoute)
app.use("/api/gigs",gigRoute)
app.use("/api/reviews",reviewRoute)
app.use("/api/conversations",conversationRoute)
app.use("/api/orders",orderRoute)
app.use("/api/messages",messageRoute)


app.listen(8800, () => {
    console.log("Back-end server is running");
})