const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const app = express()
const productRouts = require("./router/router");
const multer = require('multer');

dotenv.config();
mongoose.connect(process.env.URL,
    {useNewUrlParser:true,
    useUnifiedTopology:true},
    (err)=> {
        if (!err) {
            console.log("DB Connected......")
        } else {
            console.log("DB connection error......");
            console.log(err);
        }
    });

    app.use(express.json());

//Route middleware
app.use("/medInven",productRouts);

app.listen(8908,()=> console.log("Server Start...."));