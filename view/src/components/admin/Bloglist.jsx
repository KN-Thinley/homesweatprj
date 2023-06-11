// import React, { useEffect, useState } from "react";
// import BlogItem from "./BlogItem";

// const BlogList = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [displayLimit, setDisplayLimit] = useState(6);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const response = await fetch("/admin/Get_allBlog");
//         const data = await response.json();
//         setBlogs(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   const handleShowMore = () => {
//     setDisplayLimit(blogs.length); // Show all blogs
//   };

//   return (
//     <>
//       <div className="blog-list grid lg:grid-cols-3 font-sans bg-black p-8 gap-8 pt-40">
//         {blogs.slice(0, displayLimit).map((blog) => (
//           <BlogItem key={blog._id} blog={blog} />
//         ))}
//       </div>
//       <div className="show-more-btn flex justify-center items-center">
//         {displayLimit < blogs.length && (
//           <button
//             className="show-more-btn bg-white text-black p-3 text-xl px-8"
//             onClick={handleShowMore}
//           >
//             Show More
//           </button>
//         )}
//       </div>
//     </>
//   );
// };

// export default BlogList;

import React, { useEffect, useState } from "react";
import BlogItem from "./BlogItem";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [displayLimit, setDisplayLimit] = useState(6);
  const [showFullList, setShowFullList] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/admin/Get_allBlog");
        const data = await response.json();
        console.log("data from api:", data);
        setBlogs(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlogs();
  }, []);

  const handleShowMore = () => {
    setShowFullList(true);
  };

  const handleShowLess = () => {
    setShowFullList(false);
    setDisplayLimit(6); // Reset display limit to initial value
  };

  return (
    <>
      <div className="blog-list grid md:grid-cols-2 lg:grid-cols-3 font-sans bg-black p-8 gap-8 pt-40">
        {blogs
          .slice(0, showFullList ? blogs.length : displayLimit)
          .map((blog) => (
            <BlogItem key={blog._id} blog={blog} />
          ))}
      </div>
      <div className="btns flex justify-center items-center bg-black text-white">
        {displayLimit < blogs.length && !showFullList && (
          <button className="show-more-btn text-2xl" onClick={handleShowMore}>
            Show More
          </button>
        )}
        {showFullList && (
          <button className="show-less-btn text-2xl" onClick={handleShowLess}>
            Show Less
          </button>
        )}
      </div>
    </>
  );
};

export default BlogList;
