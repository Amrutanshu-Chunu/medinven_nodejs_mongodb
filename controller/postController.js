const purchaseModel = require("../model/purchaseModel");
const customereModel = require("../model/customerModel");
const distributoreModel = require("../model/distributorModel");
const inventoryModel = require("../model/inventoryModel");
// const medicinesModel = require("../model/medicinemodel");
const usersModel = require("../model/userModel");
const salesModel = require("../model/salesModel");
const imageModel = require("../model/imageModel");
const multer = require("multer");
//storage
const Storage = multer.diskStorage({
  destination: 'uploads',
  filename: (req,file,cb) =>{cb(req.Storage,file.originalname);},
});
const upload = multer({ 
  storage: Storage
}).single('testImage')
const uploadimage = async (req,res) => {
  upload(req,res,(err) =>{
    if(err){
      console.log("image upload error")
      console.log(err);
    }
    else{
const newImage = imageModel({
    name: req.body.name,
    image: {
      data: req.file.filename,
      contentType: 'image/png'
    }
  })
  newImage.save().then(()=> res.send('image uploaded successfully'));

    }
  })
  
}

//add a customer data 
const add_customer_Data = async (req,res) => {
console.log("inside Post Function");
const addData = new customereModel({
  name: req.body.name,
  phone: req.body.Number,
  saleDate: req.body.saleDate,
  addrees: req.body.addrees,
  customerid: req.body.customerid 
});
const addValue = await addData.save();
res.json(addValue);
console.log("Data Added.....");
};
//add a distributor data
const add_distributor_Data = async (req,res) => {
console.log("inside Post Function");
const addData = new distributoreModel({
  name: req.body.name,
  phone: req.body.Number,
  purchaseDate: req.body.purchaseDate,
  gst: req.body.gst,
  invoiceNumber: req.body.invoiceNumber, 
  distributorid: req.body.distributorid, 
});
const addValue = await addData.save();
res.json(addValue);
console.log("Data Added.....");
};
//add a inentory data
const add_inventory_Data = async (req,res) => {
console.log("inside Post Function");
const addData = new inventoryModel({
  medicinename: req.body.medicinename,
  stock: req.body.stock,
  description : req.body.description,
});
const addValue = await addData.save();
res.json(addValue);
console.log("inventory Data Added.....");
};
//add a user data
const add_user_Data = async (req,res) => {
console.log("inside Post Function");
const addData = new usersModel({
  name: req.body.name,
  phone: req.body.phone,
  employeeId: req.body.employeeId,
  address: req.body.address,
});
const addValue = await addData.save();
res.json(addValue);
console.log("Data Added.....");
};
//add a sales data
const add_sale_Data = async (req,res) => {
console.log("inside Post Function");
const addData = new salesModel({
   
    customer:req.body.customer,
    medicine: req.body.medicine,
    saleid:req.body.saleid,
    doctorName:req.body.doctorName,
    invoiceNumber:req.body.invoiceNumber,
    prescription:req.body.prescription,
    comment:req.body.comment,
    termsandcondition:req.body.termsandcondition,
});
const addValue = await addData.save();
res.json(addValue);
// console.log(addData);
console.log("Sale Data Added.....");
};

//post purchase data
const add_purchase_Data = async (req,res) => {

console.log("inside Post Function");
const addPurchaseData = new purchaseModel({
  distributor: req.body.distributor,
  medicine: req.body.medicine,
   
});
const addValue = await addPurchaseData.save();
res.json(addValue);
console.log("Purchase Data Added.....");
};


//edit a sigle data
const edit_single_Data = async (req,res) => {
    console.log("inside Post Function");
    const edit_data = new salesModel({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        _id: res.body._id
    });
    const editValue = await edit_data.save();
    res.json(editValue);
    console.log("Data Added.....");
    salesModel.findByIdAndUpdate({_id: req.params.userId},edit_data)
};

// delete a single data
const delete_single_Data = (req,res) => {}
 

module.exports = {
   add_customer_Data,
   add_distributor_Data,
   add_inventory_Data,
   add_sale_Data,
   add_purchase_Data,
   add_user_Data,
   edit_single_Data,
   delete_single_Data,
   uploadimage,
};