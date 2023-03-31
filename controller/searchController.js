const mongoose = require("mongoose");
const salesModel = require("../model/salesModel");
const purchaseModel = require("../model/purchaseModel");
//search
//purchase
const search_purchase_Name_PDate_Invoice = async(req,res) => {
    try {
        const user = await purchaseModel.find({"$or":[
            {"distributor.distributorName":  req.params.key},
            {"distributor.purchaseDate":  req.params.key},
            {"distributor.invoiceNumber":  req.params.key}
        ]}); 
        res.json(user);
      
    } catch (e) {
        console.log(e);
        
    }
};
const search_purchase_Number = async(req,res) => {
    try {
        const user = await purchaseModel.find({"$or":[
            {"distributor.distributorPhoneNumber":  req.params.key },
        ]}); 
        res.json(user);
        
    } catch (e) {
        console.log(e);
        
    }
};
const search_purchase_Medicine_name_batchcode_expDate = async(req,res) => {
    try {
        const user = await purchaseModel.find({"$or":[
            {"medicine.medicineName":  req.params.key},
            {"medicine.batchcode":  req.params.key},
            {"medicine.expDate":  req.params.key},

        ]}); 
        res.json(user);
    
    } catch (e) {
        console.log(e);
        
    }
};
const search_sale_Medicine_name_batchcode_expDate = async(req,res) => {
    try {
        const user = await salesModel.find({"$or":[
            {"medicine.medicineName":  req.params.key},
            {"medicine.batchcode":  req.params.key},
            {"medicine.expDate":  req.params.key},
           
        ]}); 
        res.json(user);
    
    } catch (e) {
        console.log(e);
        
    }
};
//sale
const search_sale_Customer_Name_SaleDate = async(req,res) => {
    try {
        const user = await salesModel.find({"$or":[
            {"customer.name":  req.params.key},
            {"customer.saleDate":  req.params.key},
          
        ]}); 
        res.json(user);
      
    } catch (e) {
        console.log(e);
        
    }
};
const search_customer_Number = async(req,res) => {
    try {
        const user = await salesModel.find({"$or":[
            {"customer.phoneNumber":  req.params.key},
           
        ]}); 
        res.json(user);
        
    } catch (e) {
        console.log(e);
        
    }
};


module.exports = {
    search_purchase_Name_PDate_Invoice,
    search_purchase_Number,
    search_sale_Customer_Name_SaleDate,
    search_customer_Number,
    search_purchase_Medicine_name_batchcode_expDate,
    search_sale_Medicine_name_batchcode_expDate,
}