const { Double } = require("mongodb");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
   
    name: String,
    phone: Number,
    employeeId: String,
    address: String,
});

module.exports = mongoose.model("users",userSchema);