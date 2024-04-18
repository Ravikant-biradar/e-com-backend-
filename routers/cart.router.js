import Express from "express";
import { cartcontroller, fetchcartdata, removefromcart } from "../controllers/cart.controller.js";
const cartroute = Express.Router();

cartroute.post("/addtocart", cartcontroller);
cartroute.get("/getcartdata" , fetchcartdata)
cartroute.delete("/deleteitem/:id" , removefromcart)


export default cartroute;