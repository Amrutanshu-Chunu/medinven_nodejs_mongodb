
const { Double } = require("mongodb");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    
    name: String,
    customerId: String,
    phoneNumber: Number,
    saleDate: String
});

module.exports = mongoose.model("customer",userSchema);