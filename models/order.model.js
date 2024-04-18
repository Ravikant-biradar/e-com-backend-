import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  name: String,
  email: String,
  number: String,
  adress: String,
  village: String,
  pincode: String,
  allorders : Array
},{timestamps : true});

export const order = mongoose.model("order", orderSchema);
