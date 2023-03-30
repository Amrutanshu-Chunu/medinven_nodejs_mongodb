const router = require("express").Router();
const postcontroller = require("../controller/postController")
const getcontroller = require("../controller/getController")
const searchController = require("../controller/searchController")
//get
//sale
router.get("/sale",getcontroller.all_sale_Data);
router.get("/todaysale",getcontroller.todaysale);
router.get("/todaysalecount",getcontroller.todaysalecount);
router.get("/totalsalecount",getcontroller.todaysalecount);
router.get("/todaysaleamount",getcontroller.todaysaleamount);
router.get("/totalsaleamount",getcontroller.totalsaleamount);
//purchase
router.get("/purchase",getcontroller.all_purchase_Data);
router.get("/todaypurchase",getcontroller.todaypurchase);
router.get("/todaypurchasecount",getcontroller.todaypurchasecount);
router.get("/totalpurchasecount",getcontroller.totalpurchasecount);
router.get("/todaypurchaseamount",getcontroller.todaypurchaseamount);
router.get("/totalpurchaseamount",getcontroller.totalpurchaseamount);
//
router.get("/customer",getcontroller.all_customer_Data);
router.get("/distributor",getcontroller.all_distributor_Data);
router.get("/inventory",getcontroller.all_inventory_Data);
router.get("/medicines",getcontroller.all_medicine_Data);
router.get("/user",getcontroller.all_user_Data);
router.get("/singleData:userId",getcontroller.singlel_Data);
//post

router.post("/upload",postcontroller.uploadimage);
router.post("/cusstomer",postcontroller.add_customer_Data);
router.post("/distributor",postcontroller.add_distributor_Data);
router.post("/inventory",postcontroller.add_inventory_Data);
// router.post("/medicine",postcontroller.all_medicine_Data);
router.post("/user",postcontroller.add_user_Data);
router.post("/sale",postcontroller.add_sale_Data);
router.post("/purchase",postcontroller.add_purchase_Data);
router.put("/update:userId",postcontroller.edit_single_Data);
router.delete("/delete:userId");
//Search
router.get("/purchase/search/:key",searchController.search_purchase_Name_PDate_Invoice);
router.get("/purchase/search/phone/:key",searchController.search_purchase_Number);
router.get("/purchase/medicine/search/:key",searchController.search_purchase_Medicine_name_batchcode_expDate);
router.get("/sale/search/:key",searchController.search_sale_Customer_Name_SaleDate);
router.get("/sale/search/phone/:key",searchController.search_customer_Number);

module.exports = router;