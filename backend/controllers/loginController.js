require("dotenv").config();
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

const loginController = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  const comparedPass = await bcrypt.compare(password, user.password);

  if (!user) {
    res.status(400).send({ message: "Provide Valid Credential" });
  }
  if (!comparedPass) {
    res.status(400).send({ message: "Provide Valid Credential123" });
  }

  const payload = {
    user: {
      id: user._id,
    },
  };

  const accessToken = jwt.sign(payload, jwtSecret);
  res.status(200).json({ success: true, accessToken: accessToken });
};

module.exports = loginController;
