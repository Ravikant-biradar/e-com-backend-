import mongoose from "mongoose";

const kartschema = mongoose.Schema(
  {
    title: String,
    description: String,
    price: Number,
    brand: String,
    category: String,
    thumbnail: String,
  },
  { timestamps: true }
);

export const kart = mongoose.model("kart", kartschema);
