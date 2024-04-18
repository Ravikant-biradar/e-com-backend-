import Express from "express";
import { products } from "../controllers/products.controller.js";
const productroute = Express.Router();

productroute.get("/products", products);

export default productroute;


