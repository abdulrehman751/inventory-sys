import { timeStamp } from "console";
import mongoose from "mongoose";
import { type } from "os";
const profileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    age: {
      type: Number,
      min: 3,
      max: 100,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },
    address: {
      street: { type: String, trim: true },
      city: { type: String, trim: true },
      state: { type: String, trim: true },
      country: { type: String, trim: true },
      postalcode: { type: Number, trim: true },
    },
    phone: {
      type: String,
      match: [/^\d{10,15}$/, "Phone number must be valid"],
    },
    bio: {
      type: "String",
      maxlength: 500,
      default: "",
    },
    avatar: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);
const Profile = mongoose.model("Profile", profileSchema);
export default Profile;  
