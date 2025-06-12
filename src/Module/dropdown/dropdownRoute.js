import express from "express";
var router = express.Router();
import controller from "./dropdownController.js";

router.post("/addDropdown", controller.addDropdown);
// router.post("/updateDropdown", controller.updateDropdown);
router.post("/getDropdown", controller.getDropdown);
router.get("/getAllDropdown", controller.getAllDropdown);
// router.post("/deleteDropdown", controller.deleteDropdown);
export default router;
