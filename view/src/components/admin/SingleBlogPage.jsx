import { useParams } from "react-router";
import { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import BlogList from "./Bloglist";

const SingleBlogPage = () => {
  const { id } = useParams();
  console.log("got value from params");
  const [blog, setBlog] = useState(null);
  const [editableImage, setEditableImage] = useState(null);
  const [editableTitle, setEditableTitle] = useState(null);
  const [editableContent, setEditableContent] = useState(null);

  const handleContentChange = (event) => {
    const newContent = event.target.innerHTML;
    setEditableContent(newContent);
  };

  useEffect(() => {
    console.log("In use effect");
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/admin/get_blog/${id}`);
        const data = await response.json();
        console.log("try response data: ", data);
        setBlog(data);
        setEditableImage(data.blog_image);
        setEditableTitle(data.blog_title);
        setEditableContent(data.description);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchBlog();
  }, [id]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setEditableImage(file);
  };

  const handleTitleChange = (event) => {
    const newTitle = event.target.innerHTML;
    setEditableTitle(newTitle);
  };

  const handleSaveChanges = () => {
    const updatedData = {
      blog_title: editableTitle,
      blog_image: editableImage,
      description: editableContent,
    };
    // const updatedFormData = new FormData();
    // updatedFormData.append("blog_title", editableTitle);
    // updatedFormData.append("blog_image", editableImage);
    // updatedFormData.append("description", editableContent);
    // console.log("updated form data is:", updatedFormData);

    fetch(`/admin/blog_update/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        updatedData,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Data updated successfully");
        } else {
          alert("Couldn't update the data");
        }
      })

      .catch((error) => {
        console.error(error);
        console.log("Form data from the update api");
      });
  };

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="singleBlog bg-black text-white">
        <Navbar />
        <div className="p-16"></div>
        <input
          type="file"
          onChange={handleImageChange}
          className="editable-input"
        />
        <img
          src={`/uploads/${editableImage}`}
          accept="image/*"
          alt={editableTitle}
          className="inline object-cover h-96 w-screen object-center"
        />
        <div className="heading flex justify-center items-center">
          <h2
            name="blog_title"
            className="font-sans text-3xl md:text-4xl lg:text-7xl border-b-2 border-red-700 inline-block pb-2 pt-12"
            contentEditable={true}
            onInput={handleTitleChange}
            dangerouslySetInnerHTML={{ __html: editableTitle }}
          ></h2>
        </div>
        <p
          name="description"
          className="font-sans text-md lg:text-xl text-justify whitespace-pre-wrap px-24 lg:px-48 py-12"
          contentEditable={true}
          onInput={handleContentChange}
          dangerouslySetInnerHTML={{ __html: editableContent }}
        ></p>
        <div className="saveChangesBtn flex justify-center items-center pb-4">
          <button
            onClick={handleSaveChanges}
            className="font-sans border-white border p-2 focus:outline-none"
          >
            Save Changes
          </button>
        </div>
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
