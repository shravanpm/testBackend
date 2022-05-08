const mongoose = require("mongoose");

module.exports = () => {
    // return mongoose.connect("mongodb+srv://masai:Project@cluster0.k3jqc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
    return mongoose.connect("mongodb+srv://SushrutiNihale:Nykaa123@cluster0.dgnkh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
}