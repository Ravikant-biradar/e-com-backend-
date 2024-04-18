import Express from "express";
const route = Express.Router();
import { ordercontroller } from "../controllers/order.controller.js";

 

route.post("/orderapi", ordercontroller);


export default route