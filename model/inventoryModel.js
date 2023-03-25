const { Double } = require("mongodb");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
   
    medicineId: String,
    quatity: Number
});

module.exports = mongoose.model("inventory",userSchema);