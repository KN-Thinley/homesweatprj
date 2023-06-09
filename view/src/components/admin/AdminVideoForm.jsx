import { useEffect, useState } from "react";
import "./admin.css";

const AdminVideoForm = ({ closeModal }) => {
  const initialValues = {
    video_title: "",
    video_url: "",
    video_description: "",
    workout_type: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
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

    if (!values.video_title) {
      errors.video_title = "Title is required";
    }
    if (!values.video_url) {
      errors.video_url = "URL is required";
    }
    if (!values.video_description) {
      errors.video_description = "Content is required";
    }
    if (!values.workout_type) {
      errors.workout_type = "Workout is required";
    }
    return errors;
  };

  const PostData = async () => {
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    const { video_title, video_url, video_description, workout_type } =
      formValues;

    const formData = new FormData();
    formData.append("video_title", video_title);
    formData.append("video_url", video_url);
    formData.append("video_description", video_description);
    formData.append("workout_type", workout_type);
    console.log("below formdata");
    try {
      const res = await fetch("/admin/add_video", {
        method: "POST",
        body: formData,
      });
      if (res.status === 200) {
        alert("done");
        setFormValues(initialValues);
      } else {
        console.log(res.body);
        alert("didn't");
        setFormValues(initialValues);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleClose = () => {
    setFormValues(initialValues);
    closeModal();
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-left font-sans"
      >
        <h1 className="font-sans text-2xl font-bold">Create New Video</h1>
        <div className="font-sans flex flex-col">
          <label htmlFor="title" className="font-sans">
            Title:
          </label>
          <input
            type="text"
            name="video_title"
            id="video_title"
            value={formValues.video_title}
            onChange={handleChange}
            className="border-red-500 border-2"
          />
          <small className="font-sans text-red-500">
            {formErrors.video_title}
          </small>
        </div>
        <div className="font-sans flex flex-col">
          <label htmlFor="title" className="font-sans">
            Video URL:
          </label>
          <input
            type="text"
            id="video_url"
            name="video_url"
            value={formValues.video_url}
            onChange={handleChange}
            className="border-red-500 border-2"
          />
          <small className="font-sans text-red-500">
            {formErrors.video_url}
          </small>
        </div>
        <div className="font-sans flex flex-col">
          <label htmlFor="content" className="font-sans">
            Content:
          </label>
          <textarea
            type="text"
            id="video_description"
            name="video_description"
            value={formValues.video_description}
            onChange={handleChange}
            className="border-red-500 border-2"
          />
          <small className="font-sans text-red-500">
            {formErrors.video_description}
          </small>
        </div>
        <div className="font-sans flex flex-col">
          <label htmlFor="workout_type" className="font-sans">
            Workout Type:
          </label>
          <input
            placeholder="abs/chests/arms/legs/backs"
            name="workout_type"
            id="workout_type"
            value={formValues.workout_type}
            onChange={handleChange}
            className="border-red-500 border-2"
          />
          <small className="font-sans text-red-500">
            {formErrors.workout_type}
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

export default AdminVideoForm;
