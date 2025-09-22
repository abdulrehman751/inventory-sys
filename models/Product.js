
/**
 * @typedef {import('mongoose').Document & {
 *   name: string,
 *   quantity: string,
 *   price: number,
 *   category: string,
 *   createdAt: string
 * }} ProductDocument
 */
const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
  name:{type:String,required:true},
  quantity:{type:String,required:true},
  price:{type:Number, required:true},
  category:{type:String, required:true},
  createdAt:{type:String,default:Date.now}

})
/**
 * @type {import('mongoose').Model<ProductDocument>}
 */
module.exports=mongoose.model("Product", productSchema)
