import { user_registration } from "../models/user.model.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashpassword = await bcrypt.hash(password, 10);
    const save = await new user_registration({
      name,
      email,
      password: hashpassword,
    }).save();
    res.status(200).json({
      success: true,
      mes: ` Hello...   ${name} you are successfully registered tq`,
    });
  } catch (error) {
    console.log(`error while sign-in${error}`);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const checkuser = user_registration.findOne({ email });
    if (!checkuser) {
      return res.send("email doesnot exists");
    }

    const checkpass = await bcrypt.compare(password, checkuser.password);
    if (!checkpass) {
      return res.send("internal server error");
    }

    res.status(200).json({ mes: `"successfully logged in "`, success: true });
  } catch (error) {
    console.log(`error while login${error}`);
  }
};
