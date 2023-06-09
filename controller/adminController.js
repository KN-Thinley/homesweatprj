const adminModel = require("../model/adminModel");
const jwt = require("jsonwebtoken");

require("dotenv").config({ path: "../configuration/config.env" });

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const signupAdmin = async (req, res) => {
  try {
    const admin = await adminModel.create(req.body);

    console.log(req.body);
    res.status(201).json({
      message: "successful",
      data: {
        adminData: admin,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const loginAdmin = async (req, res) => {
  try {
    const admin = await adminModel.findbyCredenbtials(
      req.body.email,
      req.body.password
    );
    const token = signToken(admin._id);
    res.cookie(`session_id`, token);

    //checking the admins credentials
    res.status(200).send({
      message: "successful",
      token,
      data: {
        adminData: admin,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const logoutAdmin = (req, res) => {
  try {
    res.clearCookie(`session_id`);
    res.status(200).json({ message: " admin logout" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { signupAdmin, loginAdmin, logoutAdmin };
