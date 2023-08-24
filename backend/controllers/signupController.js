//external import
const bcrypt = require("bcrypt");
//internal import
const User = require("../models/userModel");

const signupController = async (req, res) => {
  const { name, location, email, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      location,
    });
    await newUser.save();
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};

module.exports = signupController;
