import { kart } from "../models/cart.model.js";

export const cartcontroller = async (req, res) => {
  try {
    const cartdata = req.body;
    console.log(cartdata);
    const addtocart = await new kart(cartdata).save();
    res.status(200).json({ mes: "item added to kart.... ", success: true });
  } catch (error) {
    console.log(`error in adding the item  ${error}`);
  }
};

export const fetchcartdata = async (req, res) => {
  try {
    const ordercartdata = await kart.find();
    res.status(201).json(ordercartdata);
  } catch (error) {
    console.log(`error in fetching cart data   ${error}`);
  }
};

export const removefromcart = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const deletedItem = await kart.findByIdAndDelete({ _id: id });
    if (!deletedItem) {
      res.status(404).json({ mes: "item not found", success: true });
    } else {
      res.send("item removed");
    }
  } catch (error) {
    console.log(`error in deleting the item   ${error}`);
  }
};
