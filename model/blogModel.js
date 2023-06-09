const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  blog_title: { type: String, required: true },
  blog_short_desp: { type: String, required: true },
  blog_image: { type: String, required: true },
  description: { type: String, required: true },
});

const blog = mongoose.model("blog", blogSchema);
module.exports = blog;
