
const { Double } = require("mongodb");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    customer:{
        name: String,
        customerId: String,
        phoneNumber: Number,
        saleDate: String
    },
    medicine:[{
        medicineName:String,
        medicineType:String,
        medicineId:String,
        quantity:Number,
        discount:Number,
        gst:Number,
        price:Number,
        batchcode:String,
    }],
    saleid:String,
    doctorName:String,
    invoiceNumber:String,
    prescription:String,
    comment:String,
    termsandcondition:String,
   
});
// console.log(userSchema);

module.exports = mongoose.model("sales",userSchema);