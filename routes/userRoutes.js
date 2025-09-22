import express from "express"
// const {registerUser,loginUser}=require("../controllers/userController.js")\
import {registerUser , loginUser} from "../controllers/userController.js"
const router=express.Router();


router.post("/register", registerUser);
router.post("/login", loginUser);

export  default router;
