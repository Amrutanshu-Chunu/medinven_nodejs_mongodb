const { Double } = require("mongodb");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
   
    medicinename: String,
    stock: Number,
    description: String,
    info: String,
    expDate: String,
    company: String,
    distributorId: String,
    medicineId: String,
    distributorName: String
});

module.exports = mongoose.model("inventory",userSchema);

//    medicineName;
//    inventoryId;
//    medicineDescription;
//    info
//    stock;