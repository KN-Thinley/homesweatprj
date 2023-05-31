const blog = require("../model/blogModel");
const blogModel = require("../model/blogModel");

// adding the blog post
const createBlogPost = async (req, res) => {
  try {
    const blog_post = await blogModel.create(req.body)
    res.status(201).json(blog_post);
  } catch (error) {
    res.status(500).json({ error: 'Could not add the post' });
  }
};

const updateBlogPost = async (req, res) => {
  try {
    const {id} = req.params;
    const { blog_post, blog_image, description} = req.body;
    const updatedBlogPost = await blog.findByIdAndUpdate(
      id,
      { blog_post, blog_image, description},
      {new : true}
    );
    if(!updatedBlogPost){
      return res.status(404).json({message: 'Blog post not found'});
    }
    res.json(updatedBlogPost)
  } catch (error){
    res.status(500).json({error:error.message})
  }
};

const deleteBlogPost = async (req, res)=>{
  try{
    const {id} = req.params;
    const deletedBlogPost = await blog.findByIdAndRemove(id);
    if(!deletedBlogPost){
      return res.status(404).json({message: 'Blog post not found'});
    }
    res.json({message:'Blog post deleted succesfully'})
  } catch(error){
    res.status(500)({
      error:error.message
    });
  }

}

const getAllBlogPosts = async (req, res) =>{
  try {
    const blogPosts =await blog.find();
    res.json(blogPosts);
  } catch (error){
    res.status(500).json({error: error.message})
  }
};


module.exports = {createBlogPost , updateBlogPost,deleteBlogPost, getAllBlogPosts};
