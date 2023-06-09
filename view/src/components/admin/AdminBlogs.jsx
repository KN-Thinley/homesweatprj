// import AdminNav from "./AdminNav";
// import Footer from "../Footer";
// import BlogList from "./Bloglist";
// import AdminBlogForm from "./AdminBlogForm";

// function AdminBlogs() {
//   return (
//     <>
//       <AdminNav />
//       <AdminBlogForm />
//       <BlogList />
//       <Footer />
//     </>
//   );
// }

// export default AdminBlogs;

import "./admin.css";
import React, { useState } from "react";
import AdminNav from "./AdminNav";
import Footer from "../Footer";
import BlogList from "./Bloglist";
import AdminBlogForm from "./AdminBlogForm";

function AdminBlogs() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <AdminNav />
      <button className="add-blog-button" onClick={handleOpenModal}>
        Add Blog
      </button>
      <BlogList />
      <Footer />
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <AdminBlogForm closeModal={handleCloseModal} />
          </div>
        </div>
      )}
    </>
  );
}

export default AdminBlogs;
