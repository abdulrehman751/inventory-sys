import Product from "../models/Product.js";
import {storage} from "../config/firebase.js";
import {  ref, uploadBytes, getDownloadURL } from "firebase/storage";



export const getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 })
    res.status(200).json({message :"products fetch successfully" , status:"true", products})
  } catch (error) {
    res.status(500).json({ message: error.message , status:"false" })

  }
}

export const createProducts = async (req, res) => {
  try {
    const { name, quantity, price, category } = req.body;

let imageUrl = "";
if (req.file) {
  console.log("File received:", req.file);
  const storageRef=ref(storage,`products/${Date.now()}_${req.file.originalname}`);
  const snapshot = await uploadBytes(storageRef,req.file.buffer);
  imageUrl = await getDownloadURL(snapshot.ref);
}




    const product = await Product.create({ name, quantity, price, category,imageUrl });
    res.status(201).json({message: "product create successfully" ,product});
  } catch (error) {
    res.status(500).json({ message: error.message });

  }
}

export const updateProducts = async (req, res) => {
  try {
    const products = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!products)
      return res.status(404).json({ message: "Products not found" })
     return res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "product not found" })
  }

}

export const deleteProducts = async (req, res) => {
  try {
    const products = await Product.findByIdAndDelete(req.params.id)
    if (!products) return res.status(404).json({ message: "Products not found" })
    return res.status(204).json(products)

  } catch (error) {

    res.status(500).json({ message: "product not found" })
  }

}