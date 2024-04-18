import { productschema } from "../models/products.model.js";

export const products = async (req, res) => {
  try {
    const productdata = await productschema.find();
    res.status(201).json(productdata);
  } catch (error) {
    console.log(`error in fetching data ${error}`);
  }
};
