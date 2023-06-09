const userModel = require("../model/userModel");
const jwt = require("jsonwebtoken");

require("dotenv").config({ path: "../configuration/config.env" });

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const registerUser = async (req, res) => {
  try {
    const user = await userModel.create(req.body);
    console.log(req.body);
    res.status(201).json({
      message: "successful",
      data: {
        userData: user,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await userModel.findByCredentials(
      req.body.email,
      req.body.password
    );

    const token = signToken(user._id);
    res.cookie(`session_id`, token);

    // Check if user is confirm
    res.status(200).send({ message: user });
  } catch (e) {
    res.status(400).send({ message: e });
  }
};

const logoutUser = (req, res) => {
  try {
    res.clearCookie(`session_id`);
    res.status(200).json({ message: "User logout" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { registerUser, loginUser, logoutUser };
