import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  name: String,
  age: String,
  dob: String,
  gender: String,
  city: String,
  pincode: String,
  cibil: String,
  occupation: String,
  earning: String,
  email: String,
  mobile: String,
}, { timestamps: true });

const customerModel = mongoose.model("customer", customerSchema);

export default customerModel;



