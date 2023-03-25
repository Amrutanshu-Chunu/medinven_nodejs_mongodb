
const { Double } = require("mongodb");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    distributor:{
        distributorName: String,
        distributorPhoneNumber : Number,
        gstIn: String,
        invoiceNumber: String,
        purchaseDate: String,
        distributorId: String,
    },
    medicine:[{
        medicineName: String,
        packing: String,
        quantity: Number,
        unit: String,
        price: Number,
        discount: Number,
        batchcode: String,
        gst: Number,
        expDate: String,
        inStock: String,
    }],
  
});

module.exports = mongoose.model("purchases",userSchema);