const User = require("./../models/user.model")
const register = async (req,res) =>{

    try{
        const newUser = new User({
            username:"test",
            email:"test@gmail.com",
            password:"123",
            country:"India"
        });

        await newUser.save();
        res.status(201).send("user created")
    }
    catch(err)
    {
        res.status(500).send("Something went wrong")
    }
}

const login = (req,res) =>{

}

const logout = (req,res) =>{

}

module.exports = register


