
const { Double } = require("mongodb");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
   
    name: String,
    phone: Number,
    saledate: String,
    address: String,
    customerid: String
});

module.exports = mongoose.model("customer",userSchema);