const uModel = require("../model/userModel");
const aModel = require("../model/adminModel");
const jwt = require("jsonwebtoken");

require("dotenv").config({ path: "../configuration/config.env" });

//next for middleware process
const adminAuth = async (req, res, next) => {
  try {
    const { cookies } = req;
    var token = "";
    if ("session_id" in cookies) {
      token = cookies.session_id;
      console.log("at if");
    } else {
      throw "";
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decode);

    const admin = await aModel.findOne({ _id: decode.id });
    if (!admin) {
      throw "";
    }
    req.token = token;
    req.admin = admin;
    next();
  } catch (e) {
    res.status(401).send({ error: "please login" });
  }
};

const userAuth = async (req, res, next) => {
  try {
    const { cookies } = req;
    var token = "";
    if ("session_id" in cookies) {
      token = cookies.session_id;
    } else {
      throw "";
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);

    const admin = await uModel.findOne({ _id: decode.id });
    if (!admin) {
      throw "";
    }
    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ error: "please login" });
  }
};

module.exports = {
  adminAuth,
  userAuth,
};
