import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, reqiured: true },
    password: { type: String, reqiured: true },
    role: { type: String, default: "user", enum: ["user", "admin"] },
    profile: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" },
  },
  {
    timestamps: true,
  }
);


const User = mongoose.model("User", userSchema);

export default User;

