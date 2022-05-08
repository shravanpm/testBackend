const User = require("../models/users.model");
const jwt = require("jsonwebtoken");

require('dotenv').config();

const generateToken = (user) => {
    return jwt.sign({user},process.env.SECRET_KEY);
}

const register = async(req,res) => {
    console.log("inside register");
    try {
        // check if user's mobile number already exists in database
        let user = await User.findOne({mobile: req.body.mobile});

        if (user) {
            return res.status(400).send("This number is already registered with us");
        }

        user = await User.create(req.body);
        console.log(`${user}is registered`);

        const token = generateToken(user);

        return res.status(200).send({user,token});

    } catch(err) {
        return res.status(500).send(err);
    }
}

const login = async(req,res) => {
    console.log("inside login");
    try{
        const user = await User.findOne({mobile: req.body.mobile});

        if (!user) {
            return res.status(400).send("Please enter correct mobile number");
        }

        // let match = user.checkOtp(req.body.otp);
        let match = req.body.otp == user.otp ? true : false;

        if (!match) {
            return res.status(400).send("Incorrect OTP");
        }

        const token = generateToken(user);

        console.log(`${user} is logged in`);

        return res.status(200).send({user,token});

    } catch(err) {
        return res.status(500).send(err);
    }
}

module.exports = {register,login};