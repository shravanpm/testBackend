const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    "id": { type: Number, required: true },
    "category": { type: String, required: true },
    "feautured": { type: Boolean, required: true },
    "bestSeller": { type: Boolean, required: true },
    "image": { type: String, required: true },
    "name": { type: String, required: true },
    "offer": { type: String, required: false },
    "mrp": { type: Number, required: true },
    "price": { type: Number, required: true },
    "off": { type: Number, required: true },
    "rating": { type: Number, required: true }
}, {
    timestamps: true,
    versionKey: false,
})
const Product = mongoose.model("products", productSchema);
module.exports = Product;