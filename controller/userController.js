// const salesModel = require("../model/salesModel");
// const purchaseModel = require("../model/purchaseModel");
// const customereModel = require("../model/customerModel");

// //add a sales data
// const add_sale_Data = async (req,res) => {
// console.log("inside Post Function");
// const addData = new salesModel({
//     saleid:req.body.saleid,
//     customerName: req.body.customerName,
//     customerPhone: req.body.customerPhone,
//     medicineName: req.body.medicineName,
//     medicineType: req.body.medicineType,
//     saleDate: req.body.saleDate,
//     doctorName: req.body.doctorName,
//     invoiceNumber: req.body.invoiceNumber,
//     prescription: req.body.prescription,
//     comment: req.body.comment,
//     gst: req.body.gst,
//     batchCode: req.body.batchCode,
//     expiryDate: req.body.expiryDate,
//     finalDiscount: req.body.finalDiscount,
//     totalProfit: req.body.totalProfit,
//     quantity: req.body.quantity,
//     discount: req.body.discount,
//     mrp: req.body.mrp,
//     marginLeft: req.body.marginLeft,
// });
// const addValue = await addData.save();
// res.json(addValue);
// console.log("Data Added.....");
// };
// //post purchase data
// const add_purchase_Data = async (req,res) => {
// console.log("inside Post Function");
// const addData = new purchaseModel({
//     distributorName:req.body.distributorName,
//     distributorPhoneNumber: req.body.distributorPhoneNumber,
//     gstIn: req.body.gstIn,
//     invoiceNumber: req.body.invoiceNumber,
//     purchaseDate: req.body.purchaseDate,
//     medName: req.body.medName,
//     packageType: req.body.packageType,
//     qtyPerPack: req.body.qtyPerPack,
//     unit: req.body.unit,
//     mrpPerPc: req.body.mrpPerPc,
//     discount: req.body.discount,
//     batchCode: req.body.batchCode,
//     gst: req.body.gst,
//     inStock: req.body.inStock,
// });
// const addValue = await addData.save();
// res.json(addValue);
// console.log("Data Added.....");
// };


// //edit a sigle data
// const edit_single_Data = async (req,res) => {
//     console.log("inside Post Function");
//     const edit_data = new salesModel({
//         name: req.body.name,
//         email: req.body.email,
//         age: req.body.age,
//         _id: res.body._id
//     });
//     const editValue = await edit_data.save();
//     res.json(editValue);
//     console.log("Data Added.....");
//     salesModel.findByIdAndUpdate({_id: req.params.userId},edit_data)
// };

// // delete a single data
// const delete_single_Data = (req,res) => {}
 

// module.exports = {
//     // all_sale_Data,
//     // all_purchase_Data,
//     // singlel_Data,
//     edit_single_Data,
//     delete_single_Data,
//     add_sale_Data,
//     add_purchase_Data
// };