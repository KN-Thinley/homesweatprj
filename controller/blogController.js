const blog = require("../model/blogModel");
const blogModel = require("../model/blogModel");

// adding the blog post
const createBlogPost = async (req, res) => {
  try {
    // Access form data
    const { blog_title, blog_short_desp, description } = req.body;

    // Access uploaded image file
    const imageFile = req.file;

    // Create a new instance of the Blog model
    const newBlog = new blogModel({
      blog_title,
      blog_short_desp,
      blog_image: imageFile.filename,
      description,
    });

    // Save the new blog post to the database
    await newBlog.save();

    // Send a response indicating success
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    // Send a response indicating failure
    res.sendStatus(500).json({ error: error.message });
  }
};

// retrieve single post
const getBlogPost = async (req, res) => {
  try {
    const { id } = req.params;
    const blogPost = await blog.findById(id);

    if (!blogPost) {
      return res.status(404).json({ message: "blog post not found" });
    }
    res.json(blogPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// update blog
const updateBlogPost = async (req, res) => {
  try {
    const { id } = req.params;
    const { blog_post, blog_short_desp, blog_image, description } = req.body;
    const updatedBlogPost = await blog.findByIdAndUpdate(
      id,
      { blog_post, blog_short_desp, blog_image, description },
      { new: true }
    );
    if (!updatedBlogPost) {
      return res.status(404).json({ message: "Blog post not found" });
    }
    res.json(updatedBlogPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteBlogPost = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBlogPost = await blog.findByIdAndRemove(id);
    if (!deletedBlogPost) {
      return res.status(404).json({ message: "Blog post not found" });
    }
    res.json({ message: "Blog post deleted succesfully" });
  } catch (error) {
    res.status.json(500)({
      error: error.message,
    });
  }
};

const getAllBlogPosts = async (req, res) => {
  try {
    const blogPosts = await blog.find();
    res.json(blogPosts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
  getAllBlogPosts,
  getBlogPost,
};
