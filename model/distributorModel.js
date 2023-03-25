const { Double } = require("mongodb");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
   
    name: String,
    phone: Number,
    purchasedate: String,
    gst: String,
    invoiceNumber: String,
    distributorid: String
});

module.exports = mongoose.model("distributors",userSchema);