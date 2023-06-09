import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const initialValues = {
  pushup: "",
  squats: "",
};

const PushupsandSquats = () => {
  const [pandsValues, setPandsValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  //changes for the input function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPandsValues((prevpandsValues) => ({
      ...prevpandsValues,
      [name]: value,
    }));
    console.log(pandsValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(pandsValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      const formValues = JSON.parse(sessionStorage.getItem("formValues")) || {};
      const sexuality = sessionStorage.getItem("sexuality");
      const height = sessionStorage.getItem("height");
      const weight = sessionStorage.getItem("weight");
      const pushup = pandsValues.pushup;
      const squats = pandsValues.squats;

      //make api request to save data in the database
      saveDataToDatabase(formValues, sexuality, height, weight, pushup, squats);
      navigate("/login");
    }
  }, [formErrors, isSubmit, pandsValues.pushup, pandsValues.squats, navigate]);

  const validate = (values) => {
    const errors = {};

    if (!values.pushup) {
      errors.pushup = "Insert a value";
    }
    if (!values.squats) {
      errors.squats = "Insert a Value";
    }
    return errors;
  };

  const saveDataToDatabase = (
    formValues,
    sexuality,
    height,
    weight,
    pushup,
    squats
  ) => {
    //construct the data payload
    const data = {
      name: formValues.fullname,
      email: formValues.email,
      password: formValues.password,
      gender: sexuality,
      height: height,
      weight: weight,
      pushupMax: pushup,
      squatMax: squats,
    };

    //make the api request to the backend server
    fetch("/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        sessionStorage.clear();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="container mx-auto h-screen flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="inline-block login-form py-8 px-20"
        >
          <h1 className="text-center font-sans text-2xl font-bold pb-8">
            Pushup Max
          </h1>
          <div className="inputfields flex flex-col gap-4 pb-8">
            <input
              name="pushup"
              value={pandsValues.pushup}
              type="number"
              className="input-field font-sans"
              placeholder="Pushups"
              onChange={handleChange}
            />
            <small className="font-sans text-red-500">
              {formErrors.pushup}
            </small>
          </div>
          <h1 className="text-center font-sans text-2xl font-bold pb-8">
            Squats Max
          </h1>
          <div className="inputfields flex flex-col gap-4 pb-8">
            <input
              name="squats"
              onChange={handleChange}
              value={pandsValues.squats}
              type="number"
              className="input-field font-sans"
              placeholder="Squats"
            />
            <small className="font-sans text-red-500">
              {formErrors.squats}
            </small>
          </div>
          <button type="submit" className="text-center text-white p-3 sign-in">
            Done
          </button>
        </form>
      </div>
    </>
  );
};

export default PushupsandSquats;
