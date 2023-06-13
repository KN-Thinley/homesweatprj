const express = require("express");
const multer = require("multer");
const controller1 = require("../controller/adminController");
const controller2 = require("../controller/blogController");
const controller3 = require("../controller/videoController");
const { adminAuth } = require("../middleware/auth");
const router = express.Router();

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

router.post("/admin/signup", controller1.signupAdmin);
router.post("/admin/login", controller1.loginAdmin);
router.get("/admin/logout", adminAuth, controller1.logoutAdmin);

router.post(
  "/admin/blog_post",
  adminAuth,
  upload.single("blog_image"),
  controller2.createBlogPost
);

//get single blog
router.get("/admin/get_blog/:id", controller2.getBlogPost);
router.delete("/admin/blog_delete/:id", adminAuth, controller2.deleteBlogPost);
router.patch("/admin/blog_update/:id", adminAuth, controller2.updateBlogPost);
router.get("/admin/Get_allBlog", controller2.getAllBlogPosts);

//video routes
router.post("/admin/add_video", controller3.addVideo);
router.put("/admin/update_video/:id", adminAuth, controller3.updateVideo);
router.delete("/admin/delete_video/:id", adminAuth, controller3.deleteVideo);
router.get("/admin/getone_video/:id", controller3.getOneVideo);
router.get("/admin/getAll/:workout_type", controller3.getAllVideo);
router.get("/admin/getAll", controller3.getEveryVideo);

module.exports = router;
