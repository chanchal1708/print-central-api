import express from "express";
var router = express.Router();
import controller from "./productdetailsController.js";

router.post("/addproductdetails", controller.addproductiondetails);
router.get("/getproductdetails", controller.getproductiondetails);
router.get("/deleteproductdetails", controller.deleteproductiondetails);
router.get("/getproductdetailsbyID/:id", controller.getproductdetailsbyID);
export default router;
