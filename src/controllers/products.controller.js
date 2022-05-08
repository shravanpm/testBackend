const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
// const authenticate = require("../middlewear/authenticate");
const Product = require("../models/productSchema");
//products crud
router.post("/", async (req, res) => {
    // req.body.user_id = req.userID;
    try {

        const product = await Product.create(req.body);


        res.send(product);
    } catch (error) {
        res.send({ message: error.message });
    }
});
router.get("/", async (req, res) => {
    try {
        const products = await Product.find().lean().exec();
        res.send(products);
    } catch (error) {
        res.send(error.message);
    }
})
router.get("/:id", async (req, res) => {
    try {
        const products = await Product.find({ "category": req.params.id }).lean().exec();
        res.send(products);
    } catch (error) {
        res.send(error.message);
    }
})
//const user = await User.findOne({ email: value });
router.delete("/", async (req, res) => {
    try {
        const products = await Product.deleteMany().lean().exec();
        res.send(products);
    } catch (error) {
        res.send(error.message);
    }
})
router.delete("/:id", async (req, res) => {
    try {
        const products = await Product.deleteMany({ "category": req.params.id }).lean().exec();
        res.send(products);
    } catch (error) {
        res.send(error.message);
    }
})
module.exports = router