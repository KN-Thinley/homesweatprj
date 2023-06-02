import React, { useState } from "react";

function AdminBlogs() {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogImage, setBlogImage] = useState(null);
  const [blogDescription, setBlogDescription] = useState("");
  const [previewImage, setPreviewImage] = useState(null);

  const handleTitleChange = (event) => {
    setBlogTitle(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setBlogImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleDescriptionChange = (event) => {
    setBlogDescription(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Create FormData and append form fields
    const formData = new FormData();
    formData.append("title", blogTitle);
    formData.append("image", blogImage);
    formData.append("description", blogDescription);

    // Send formData to the server for saving in the database
    // You can use Axios, fetch, or any other HTTP client to send a POST request
    // Pass formData as the request body
    // After successful upload, you can handle any response from the server
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={blogTitle}
            onChange={handleTitleChange}
          />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          {previewImage && <img src={previewImage} alt="Preview" />}
          <input type="file" id="image" onChange={handleImageChange} />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={blogDescription}
            onChange={handleDescriptionChange}
          />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default AdminBlogs;
