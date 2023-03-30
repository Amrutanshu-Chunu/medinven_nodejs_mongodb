const salesModel = require("../model/salesModel");
const purchaseModel = require("../model/purchaseModel");
const customereModel = require("../model/customerModel");
const distributoreModel = require("../model/distributorModel");
const inventoryModel = require("../model/inventoryModel");
const medicinesModel = require("../model/medicinemodel");
const usersModel = require("../model/userModel");
const { reset } = require("nodemon");
var datetime = new Date();
// const currentdate = datetime.toISOString().slice(0,10)
var day = ("0" + datetime.getDate()).slice(-2);
var month = ("0" + (datetime.getMonth() + 1)).slice(-2);
var year = datetime.getFullYear();
const currentDate = day +"-" + month +"-"+ year ;
// const todaydatamodel = require("../model/todaydata");
console.log(currentDate);
// console.log(month);
// console.log(year);


// get all customer collection
const all_customer_Data = async (req,res) => {
    try { 
        const user =await customereModel.find();
        res.json(user);
        console.log('All customer Products');
        console.log(user);
    } catch (e) {
        console.log(e);
    }
};
// get all today collection
// const all_today_Data = async (req,res) => {
//     try { 
//         const todaysale =await todaydatamodel.find();
//         const user =await todaydatamodel.find({"customer.saledate": 26-02-2023});
//         res.json(user);
//         console.log("All today's details");
//         console.log(user);
//     } catch (e) {
//         console.log(e);
//     }
// };
// get all distributor collection
const all_distributor_Data = async (req,res) => {
    try {
        const user =await distributoreModel.find();
        res.json(user);
        console.log('All customer Products');
        console.log(user);
    } catch (e) {
        console.log(e);
        
    }
};
// get all inventory collection
const all_inventory_Data = async (req,res) => {
    try {
        const user =await inventoryModel.find();
        
        res.json(user);
        console.log('All customer Products');
        console.log(user);
    } catch (e) {
        console.log(e);
        
    }
};
// get all medicine collection
const all_medicine_Data = async (req,res) => {
    try {
        const user =await medicinesModel.find();
        res.json(user);
        console.log('All customer Products');
        console.log(user);
    } catch (e) {
        console.log(e);
        
    }
};
// get all user collection
const all_user_Data = async (req,res) => {
    try {
        const user =await usersModel.find();
        res.json(user);
        console.log('All customer Products');
        console.log(user);
    } catch (e) {
        console.log(e);
        
    }
};
// get all sale collection
const all_sale_Data = async (req,res) => {
    try {
        const user =await salesModel.find();
        res.json(user);
        console.log('All sale Products');
        // console.log(user);
    } catch (e) {
        console.log(e);
        
    }
};

// today's of sale collection
const todaysale = async (req,res) => {
    try {
        const user =await salesModel.find({"customer.saleDate": currentDate});
        res.json(user);
        console.log('All sale Products');
        // console.log(user);
    } catch (e) {
        console.log(e);
        
    }
};
// today's of purchase collection
const todaypurchase = async (req,res) => {
    try {
        const user =await purchaseModel.find({"todaysalecount.purchaseDate": currentDate});
        res.json(user);
        console.log('All sale Products');
        // console.log(user);
    } catch (e) {
        console.log(e);
        
    }
};
// get all purchase collection
const all_purchase_Data = async (req,res) => {
    try {
        const user =await purchaseModel.find();
        res.json(user);
        console.log('All Products');
        console.log(user);
    } catch (e) {
        console.log(e);
        
    }

};
//count
// get count of sale collection
const todaysalecount = async (req,res) => {
    try {
        const user =await salesModel.find({"customer.saleDate": currentDate}).countDocuments();
        res.json(user);
        console.log('All sale Products');
        // console.log(user);
    } catch (e) {
        console.log(e);
        
    }
};

// count purchase today
const todaypurchasecount = async (req,res) => {
    try {
        const user =await purchaseModel.find({"distributor.purchaseDate": currentDate}).countDocuments();
        res.json(user);
        console.log('All Products');
        console.log(user);
    } catch (e) {
        console.log(e);
        
    }

};
// count sale total
const totalsalecount = async (req,res) => {
    try {
        const user =await salesModel.find().countDocuments();
        res.json(user);
        console.log('All Products');
        console.log(user);
    } catch (e) {
        console.log(e);
        
    }

};
// today sale  amount
const totalsaleamount = async (req,res) => {
    try {
        // const user =await salesModel.find({"customer.saleDate": currentDate});
        
        // const user =  (await salesModel.aggregate([{$group:{_id: "$customer.saleDate" },{"$customer.saleDate": currentDate}}])); 
        const user = await salesModel.aggregate([
            {
                $unwind: "$medicine"
              },
              {
                $group: {
                  _id: 0,
                  value: {
                    $sum: {
                      "$toDecimal": "$medicine.price"
                    }
                  }
                }
              },
              {
                $project: {
                  _id: 0,
                  totalPrice: "$value"
                }
              }, ])
        res.json(user)
        // console.log('All Products');
        console.log(user );
    } catch (e) {
        console.log(e);
        
    }

};
// today sale  amount
const todaysaleamount = async (req,res) => {
    try {
        // const user =await salesModel.find({"customer.saleDate": currentDate});
        
        // const user =  (await salesModel.aggregate([{$group:{_id: "$customer.saleDate" },{"$customer.saleDate": currentDate}}])); 
        const user = await salesModel.aggregate([{
            $unwind: "$medicine"
          },
          {
            $match: {
              "customer.saleDate": currentDate
            }
          },
          {
            $group: {
              _id: "$customer.saleDate",
              value: {
                $sum:{
                    "$toDecimal": "$medicine.price"
                  }
              }
            }
          },
          {
            $project: {
              _id: 0,
              totalPrice: "$value"
            }
          }, ])
        // let sales = [[1, 2, 3], [2, 3, 4], [3], [4, 4], [5, 6]];

// let result = user.reduce((price, sale) => {
// //   console.log(`price: ${price}, medicines: ${medicines}`)
//   let itemPrice = sale.medicine.reduce((price, nextMed) => {
//     console.log(`mPrice: ${price}, mArray: ${nextMed.price}`)
//     return price + nextMed.price;
//   }, 0);
// //   console.log(`itemPrice: ${itemPrice}`)
//   return price + itemPrice;
// }, 0);

// console.log(result);
        res.json(user)
        // console.log('All Products');
        console.log(user );
    } catch (e) {
        console.log(e);
        
    }

};
// total purchase amount
const totalpurchaseamount = async (req,res) => {
    try {  

        const user = await purchaseModel.aggregate([
            {
                $unwind: "$medicine"
              },
              {
                $group: {
                  _id: 0,
                  value: {
                    $sum: { 
                      $toDecimal: "$medicine.price",
                      
                    }
                  }
                }
              },
              {
                $project: {
                  _id: 0,
                  totalPrice: "$value"
                }
              } ])
        res.json(user)
        // console.log('All Products');
        console.log(user );
    } catch (e) {
        console.log(e);
        
    }

};
// today purchase amount
const todaypurchaseamount = async (req,res) => {
    try {  

        const user = await purchaseModel.aggregate([{
            $unwind: "$medicine"
          },
          {
            $match: {
              "distributor.purchaseDate": currentDate
            }
          },
          {
            $group: {
              _id: "$distributor.purchaseDate",
              value: {
                $sum:{
                    "$toDecimal": "$medicine.price"
                  }
              }
            }
          },
          {
            $project: {
              _id: 0,
              totalPrice: "$value"
            }
          }, ])
       
//    const user =await purchaseModel.find({"distributor.purchaseDate": currentDate});
// let result = user.reduce((price, purchase) => {
//   console.log(`price: ${price}, medicines: ${medicines}`)
//   let itemPrice = purchase.medicine.reduce((price, nextMed) => {
//     console.log(`mPrice: ${price}, mArray: ${nextMed.price}`)
//     return price + nextMed.price;
//   }, 0);
//   console.log(`itemPrice: ${itemPrice}`)
//   return price + itemPrice;
// }, 0);

// console.log(result);
        res.json(user)
        // console.log('All Products');
        console.log(user );
    } catch (e) {
        console.log(e);
        
    }

};
// count purchase total
const totalpurchasecount = async (req,res) => {
    try {
        const user =await purchaseModel.find().countDocuments();
        res.json(user);
        console.log('All Products');
        console.log(user);
    } catch (e) {
        console.log(e);
        
    }

};



//////////////////////////////////////////////////////////////////////////////////////////////

//  get a single collection
const singlel_Data = async(req,res) => {
    try {
        const user =await salesModel.findById(req.params.userId);
        res.json(user);
        console.log('Single Products');
    } catch (e) {
        console.log(e);
        
    }
};
module.exports = {
    all_customer_Data,
    all_distributor_Data,
    all_inventory_Data,
    all_user_Data,
    all_medicine_Data,
    all_sale_Data,
    all_purchase_Data,
    singlel_Data,
    todaysalecount,
    todaypurchasecount,
    totalsalecount,
    totalpurchasecount,
    todaysale,
    todaypurchase,
    todaysaleamount,
    todaypurchaseamount,
    totalsaleamount,
    totalpurchaseamount
}