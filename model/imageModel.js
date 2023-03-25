const mongoose = require("mongoose");
const imageSchema = mongoose.Schema({
    name: {
        type: String,
    },
    image:{
        data:Buffer,
        contentType: String
    }
})
module.exports = mongoose.model("upload",imageSchema);