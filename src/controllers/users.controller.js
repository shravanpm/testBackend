// only to check if users are being added to database

const express = require("express");
const router = express.Router();

const User = require("../models/users.model");

router.get("", async(req,res) => {
    try{
        const users = await User.find();
        return res.status(200).send(users);
    } catch(err) {
        return res.status(500).send(err);
    }
});

module.exports = router;