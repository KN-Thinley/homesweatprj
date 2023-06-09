import { Link } from "react-router-dom";

const BlogItem = ({ blog }) => {
  const imgStyle = {
    filter: "brightness(0.7)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };
  return (
    <div className="blog-item font-sans text-white flex flex-col gap-12">
      <img src={`/uploads/${blog.blog_image}`} alt="Blog" style={imgStyle} />
      <h1 className="font-sans text-3xl py-4 font-bold">{blog.blog_title}</h1>
      <p className="font-sans font-light">{blog.blog_short_desp}</p>
      <Link to={`/blog/${blog._id}`}>
        <button className="underline font-sans font-medium text-start text-xl">
          View Post
        </button>
      </Link>
    </div>
  );
};

export default BlogItem;
