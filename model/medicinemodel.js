
const { Double } = require("mongodb");
const mongoose = require("mongoose");

const medicineSchema = mongoose.Schema({
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
});

module.exports = mongoose.model("medicine",medicineSchema);