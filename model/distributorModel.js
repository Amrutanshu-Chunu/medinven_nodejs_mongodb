const { Double } = require("mongodb");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
   
    distributorName: String,
    distributorPhoneNumber : Number,
    gstIn: String,
    invoiceNumber: String,
    purchaseDate: String,
    distributorId: String,
});

module.exports = mongoose.model("distributors",userSchema);