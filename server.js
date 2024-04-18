import Express from "express";
const app = Express();
import dotenv from "dotenv";
dotenv.config();

// middlewares
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
import cors from "cors";

// cross origin
app.use(cors());

// all routes are here
import route from "./routers/reg.route.js";
import cartroute from "./routers/cart.router.js";
import productroute from "./routers/product.route.js";
import orderroute from "./routers/order.router.js";

// db connection
import mongoose from "mongoose";

const mongodbconnection = async () => {
  try {
    await mongoose.connect(process.env.mongo);

    console.log("db connected");
  } catch (error) {
    console.log("err in db");
  }
};
mongodbconnection();
const port = process.env.port || 8080;

// routing starts here
app.use("/api/v1", route);
app.use("/api/v2", route);
app.use("/api/v3", productroute);
app.use("/api/v1", cartroute);
app.use("api/v1", cartroute);
app.use("api/v1", cartroute);
app.use("/api/v1", orderroute);

//  server port
app.listen(port, () => {
  console.log(`server running on ${port}`);
});


// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Ravikant-biradar/e-com-backend-.git
// git push -u origin main