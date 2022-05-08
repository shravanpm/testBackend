const express = require("express");
const cors = require("cors");

const { register, login } = require("./controllers/auth.controller");

const app = express();

const userController = require("./controllers/users.controller");
const productController = require("./controllers/products.controller");

app.use(cors());
app.use(express.json());

// to see if frontend and backend are connected
app.get("/check", async (req, res) => {
    return res.send("success!");
})

app.post("/register", register);
app.post("/login", login);

app.use("/users", userController);
app.use("/products", productController);

module.exports = app;