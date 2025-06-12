import express from "express";
var router = express.Router();
import controller from "./ConfigController.js";

router.post("/addConfig", controller.addConfig);
// router.post("/updateConfig", controller.updateConfig);
// router.post("/getConfig", controller.getConfig);
// router.get("/getAllConfig", controller.getAllConfig);
// router.post("/deleteConfig", controller.deleteConfig);
export default router;
