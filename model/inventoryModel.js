const { Double } = require("mongodb");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
   
    medicinename: String,
    stock: Number,
    description: String
});

module.exports = mongoose.model("inventory",userSchema);