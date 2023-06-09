const express = require("express");
const controller = require("../controller/userController");
const { userAuth } = require("../middleware/auth");

//for emailVerifications
const emailVerifications = require("../controller/emailController");

const router = express.Router();
console.log(__dirname);
router.post("/user/signup", controller.registerUser);
router.post("/user/login", controller.loginUser);
router.get("/user/logout", userAuth, controller.logoutUser);

module.exports = router;
