import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required:  true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  avatar: {type: String},
  description: { type: String},
  phone: {type: String},
  rating: [String],
  photo: {type: String},
  type: {type: String, required: true},
  id: { type: String },
});

export default mongoose.model("User", userSchema);