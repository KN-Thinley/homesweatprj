import { useParams } from "react-router";
import { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import BlogList from "./Bloglist";

const SingleBlogPage = () => {
  const { id } = useParams();
  console.log("got value from params");
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    console.log("In use effect");
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/admin/get_blog/${id}`);
        const data = await response.json();
        console.log("try response data: ", data);
        setBlog(data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="singleBlog bg-black text-white">
        <Navbar />
        <div className="p-16"></div>
        <img
          src={`/uploads/${blog.blog_image}`}
          alt={blog.blog_title}
          className="inline object-cover h-96 w-screen object-center"
        />
        <div className="heading flex justify-center items-center">
          <h2 className="font-sans text-3xl md:text-4xl lg:text-7xl border-b-2 border-red-700 inline-block pb-2 pt-12">
            {blog.blog_title}
          </h2>
        </div>
        <p className="font-sans text-md lg:text-xl text-justify whitespace-pre-wrap px-24 lg:px-48 py-12">
          {blog.description}
        </p>

        <div className="read-more px-20">
          <h1 className="text-center font-sans text-white text-5xl border-white border-t-4 pt-12">
            What to Read Next?
          </h1>
          <BlogList />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SingleBlogPage;
