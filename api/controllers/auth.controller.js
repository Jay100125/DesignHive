const User = require("./../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")


dotenv.config();
const register = async (req, res) => {
    try {
        const hash = bcrypt.hashSync(req.body.password, 10)
        const newUser = new User({
            ...req.body,
            password: hash
        })

        await newUser.save();
        res.status(200).send("created")
    }
    catch (err) {
        res.status(500).send("Error")
    }
}

const login = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) return res.send('user does not exist')

        const isCorrect = bcrypt.compareSync(req.body.password, user.password)
        if (!isCorrect) return res.send("Wrong password or username")

        const token = jwt.sign({
            id: user._id,
            isSeller: user.isSeller
        }, process.env.JWT_KEY)

        const { password, ...info } = user._doc
        res.cookie("accessToken", token, { httpOnly: true }).status(200).send(info)
    } catch (error) {
        res.status(500).send("Error")
    }

}

const logout = (req, res) => {
    res.send("logout")
}

module.exports = { register, login, logout }


