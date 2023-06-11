const express = require("express");
const controller = require("../controller/userController");
const { userAuth } = require("../middleware/auth");
const multer = require("multer");

//serve static files

//create multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 25, // 25MB limit (adjust as needed)
  },
  dest: "../uploads/",
});

//for emailVerifications
const emailVerifications = require("../controller/emailController");

const router = express.Router();
console.log(__dirname);
router.post("/user/signup", controller.registerUser);
router.post("/user/login", controller.loginUser);
router.get("/user/logout", userAuth, controller.logoutUser);
router.delete("/user/deleteUser/:id", userAuth, controller.deleteUser);
router.get("/user/getUser", userAuth, controller.getSingleUser);
router.get("user/getAllUsers", userAuth, controller.getAllUsers);
router.put(
  "/user/updateUser",
  userAuth,
  upload.single("profilePic"),
  controller.updateUser
);

module.exports = router;
