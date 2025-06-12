import express from "express";
var router = express.Router();
import controller from "./structureController.js";

router.post("/getstructure", controller.getstructure);
router.post("/poststructure", controller.poststructure);
// router.post("/addstructure",controller.addstructure);//adding product details in the feilds
export default router;
