const express = require('express')
const controller1 = require("../controller/adminController")
const controller2 = require("../controller/blogController")


const router = express.Router()

router.post("/admin/signup", controller1.signupAdmin);
router.post("/admin/login", controller1.loginAdmin);

router.post("/admin/blog_post", controller2.createBlogPost)
router.delete("/admin/blog_delete/:id", controller2.deleteBlogPost)
router.patch("/admin/blog_update/:id", controller2.updateBlogPost)
router.get("/admin/Get_allBlog", controller2.getAllBlogPosts)
module.exports = router;