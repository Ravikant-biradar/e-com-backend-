import nodemailer from "nodemailer";
import { order } from "../models/order.model.js";

export const ordercontroller = async (req, res) => {
  const orderdata = req.body;

  const saveorder = await new order(orderdata).save();
  res.send("order placed ");
  sendEmail(orderdata.email);
};

function sendEmail(email) {
  // Create a transporter object using SMTP
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "ravikantsbiradar8123@gmail.com",
      pass: "fjhd xrcp xpno oqcg",
    },
  });

  // Construct email message
  let mailOptions = {
    from: "ravikantsbiradar8123@gmail.com",
    to: email,
    subject: "Order Confirmation",
    text: `makkoro huliii.........bara agyada`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
}

// fjhd xrcp xpno oqcg
