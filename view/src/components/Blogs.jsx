import Navbar from "./Navbar";
import Footer from "./Footer";
import ShowBlogs from "./ShowBlogs";
const Blogs = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <div className="aboutus flex justify-center pt-32">
          <div className="about-us-box inline-block p-16">
            <h1 className="text-7xl text-center text-white">Blogs</h1>
          </div>
        </div>
        <ShowBlogs />
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
