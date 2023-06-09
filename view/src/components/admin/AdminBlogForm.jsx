import { useEffect, useState } from "react";
import "./admin.css";

const AdminBlogForm = ({ closeModal }) => {
  const initialValues = {
    blog_title: "",
    blog_short_desp: "",
    blog_image: "",
    description: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    if (e.target.name === "blog_image") {
      const file = e.target.files[0];
      setFormValues({ ...formValues, [e.target.name]: file });
      setImagePreview(URL.createObjectURL(file)); // Preview the selected image
    } else {
      setFormValues({ ...formValues, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    PostData();
  };

  useEffect(() => {
    if (isSubmit) {
      console.log(formValues);
    }
  }, [isSubmit, formValues]);

  const validate = (values) => {
    const errors = {};

    if (!values.blog_title) {
      errors.blog_title = "Title is required";
    }
    if (!values.blog_image) {
      errors.blog_image = "Image is required";
    }
    if (!values.blog_short_desp) {
      errors.blog_short_desp = "Short Description is required";
    }
    if (!values.description) {
      errors.description = "Description is required";
    }
    return errors;
  };

  const PostData = async () => {
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    const { blog_title, blog_image, blog_short_desp, description } = formValues;

    const formData = new FormData();
    formData.append("blog_title", blog_title);
    formData.append("blog_short_desp", blog_short_desp);
    formData.append("blog_image", blog_image);
    formData.append("description", description);
    try {
      const res = await fetch("/admin/blog_post", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        alert("done");
        setFormValues(initialValues);
        setImagePreview(null);
      } else {
        console.log(res.body);
        alert("didn't");
        setFormValues(initialValues);
        setImagePreview(null);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleClose = () => {
    setFormValues(initialValues);
    setImagePreview(null);
    closeModal();
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-left font-sans"
      >
        <h1 className="font-sans text-2xl font-bold">Create New Blog</h1>
        <div className="font-sans flex flex-col">
          <label htmlFor="title" className="font-sans">
            Title:
          </label>
          <input
            type="text"
            name="blog_title"
            id="blog_title"
            value={formValues.blog_title}
            onChange={handleChange}
            className="border-red-500 border-2"
          />
          <small className="font-sans text-red-500">
            {formErrors.blog_title}
          </small>
        </div>
        <div className="font-sans flex flex-col">
          <label htmlFor="title" className="font-sans">
            Short Description:
          </label>
          <input
            type="text"
            id="blog_short_desp"
            name="blog_short_desp"
            value={formValues.blog_short_desp}
            onChange={handleChange}
            className="border-red-500 border-2"
          />
          <small className="font-sans text-red-500">
            {formErrors.blog_short_desp}
          </small>
        </div>
        <div className="font-sans flex flex-col">
          <label htmlFor="image" className="font-sans">
            Image:
          </label>
          <input
            type="file"
            id="blog_image"
            name="blog_image"
            onChange={handleChange}
          />
          {imagePreview && (
            <img src={imagePreview} alt="Preview" style={{ width: "100px" }} />
          )}
          <small className="font-sans text-red-500">
            {formErrors.blog_image}
          </small>
        </div>
        <div className="font-sans flex flex-col">
          <label htmlFor="description" className="font-sans">
            Content:
          </label>
          <textarea
            name="description"
            id="description"
            value={formValues.description}
            onChange={handleChange}
            className="border-red-500 border-2"
          />
          <small className="font-sans text-red-500">
            {formErrors.description}
          </small>
        </div>
        <button type="submit">Upload</button>
      </form>
      <button className="close-button" onClick={handleClose}>
        Close
      </button>
    </>
  );
};

export default AdminBlogForm;
