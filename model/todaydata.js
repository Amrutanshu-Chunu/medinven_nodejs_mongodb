const mongoose = require("mongoose");

const numberschema = mongoose.Schema({
    todaysales: Number,
    inventoryitem: Number,
    savings: Number,
    todaysaleamount: Number,
    totalprofit: Number,
    todaypurchase: Number,
    lifetimepurchase: Number,
});
module.exports = mongoose.model("inventoryData", numberschema);