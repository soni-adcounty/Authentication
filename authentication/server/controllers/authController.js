import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  try {

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.json({ success: false, message: "All fields required" });
    }

    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new userModel({
      name,
      email,
      password: hashedPassword
    });

    await user.save();

    res.json({ success: true, message: "User Registered" });

  } catch (error) {
    console.log(error);   
    res.json({ success: false, message: error.message });

  }
};



// LOGIN
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "Wrong Email or Password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({ success: false, message: "Wrong Email or Password" });
    }

    res.json({
      success: true,
      message: "Login Successful",
      user: {
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error in Login" });
  }
};






