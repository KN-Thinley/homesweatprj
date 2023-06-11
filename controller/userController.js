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
    res.status(200).send({
      message: "Login successful",
      token,
      data: {
        userData: user,
      },
    });
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

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await userModel.findByIdAndRemove(id);

    if (!deleteUser) {
      return res.status(404).json({ message: "user not found" });
    }
    res.json({ message: "user deleted successfully " });
  } catch (err) {
    res.status(500)({
      error: err.message,
    });
  }
};

const getSingleUser = async (req, res) => {
  try {
    // const { id } = req.params;
    // const user = await userModel.findById(id);

    // if (!user) {
    //   return res.status(404).json({ message: "user not found" });
    // }
    res.json(req.user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { _id } = req.user;
    const { name, height, weight } = req.body;
    let profilePic;

    // Check if a new profile picture file is provided
    if (req.file) {
      // Set the profile picture file path or URL in the database
      profilePic = req.file.filename;
    }

    const updateUser = await userModel.findByIdAndUpdate(_id, {
      name,
      height,
      weight,
      profilePic,
    });

    if (!updateUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(updateUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  deleteUser,
  getSingleUser,
  getAllUsers,
  updateUser,
};
