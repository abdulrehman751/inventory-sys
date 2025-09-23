import mongoose from "mongoose";
import bcrypt from"bcrypt";

const userSchema=new mongoose.Schema({
  name:{type:String, required:true},
  email:{type:String,reqiured:true},
  password:{type:String,reqiured:true},
  role:{type:String,default:"user",enum:["user","admin"]}
})
//   userSchema.pre("save", async function(next){
//     if(!this.isModified("password")) return next();
//     this.password =  bcrypt.hash(this.password,10);
//     next();
//   })

  
  const User = mongoose.model("User", userSchema);
  
  export default User;
  
// module.exports=mongoose.model("User", userSchema )
