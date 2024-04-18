import Express from "express";
import { login, register } from "../controllers/reg.controller.js";

const route = Express.Router();

route.post("/register", register);
route.post("/login", login);

export default route;
