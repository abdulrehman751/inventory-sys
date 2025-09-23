import express from "express";
 import{
    getProducts,
    createProducts,
    updateProducts,
    deleteProducts,
} from "../controllers/productController.js";
import upload from "../middleware/uploadMiddleware.js";

const router=express.Router();

router.get("/",getProducts)
router.post("/", upload.single("image"),createProducts)
router.put("/:id",updateProducts)
router.delete("/:id",deleteProducts)

export default router;