
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
        // medicineName: String,
        // packing: String,
        // quantity: Number,
        // unit: String,
        // price: Number,
        // discount: Number,
        // batchcode: String,
        // gst: Number,
        // expDate: String,
        // inStock: String,
        unit: String,
        medicineName: String,
        medicineType: String,
        medicineId: String,
        genericName: String,
        cimsClass: String,
        actClassification: String,
        packing: String,
        form: String,
        contents: String,
        company: String,
        tabsPerStrip: Number,
        price: Number,
        mfgDate:  String,
        expDate: String,
        addedOn: String,
        updatedOn: String,
        addedBy: String,
        updatedBy: String,
        medicineImageURL: String,
        description: String,
        quantity: Number,
        discount: Number,
        gst:Number,
        batchcode:String,
    }],
  
});

module.exports = mongoose.model("purchases",userSchema);