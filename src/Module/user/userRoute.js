import express from "express";
var router = express.Router();
import controller from "./userController.js";

// console.log('controller');
//post
router.post("/loginUser", controller.loginUser);
router.post("/addUser", controller.addUser);
router.post("/updateUser", controller.updateUser);
router.post("/getUser", controller.getUser);
router.post("/getAllUser", controller.getAllUser);
router.post("/deleteUser", controller.deleteUser);
router.post("/deleteUserSoft", controller.deleteUserSoft);
//get
router.get("/addUsers", controller.addUsers);
router.get("/updateUsers", controller.updateUsers);
router.get("/getUsers", controller.getUsers);
router.get("/getAllUsers", controller.getAllUsers);
router.get("/deleteUsers", controller.deleteUsers);
router.get("/deleteUsersSoft", controller.deleteUsersSoft);

//put
router.put("/addUserss", controller.addUserss);
export default router;
