import "./admin.css";
import React, { useState } from "react";
import AdminNav from "./AdminNav";
import Footer from "../Footer";
import AdminVideoForm from "./AdminVideoForm";
import AdminWorkouts from "./AdminWorkouts";
import VideoList from "./VideoList";

function AdminVideos() {
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
      <AdminWorkouts />
      <button className="add-blog-button" onClick={handleOpenModal}>
        Add Video
      </button>
      <VideoList />
      <Footer />
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <AdminVideoForm closeModal={handleCloseModal} />
          </div>
        </div>
      )}
    </>
  );
}

export default AdminVideos;
