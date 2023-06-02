import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const initialValues = {
  fullname: "",
  email: "",
  password: "",
  rpassword: "",
};
const SignUp = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  // CHANGES FOR INPUT FUNCTION
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevformValues) => ({ ...prevformValues, [name]: value }));
    console.log(formValues);
  };

  // FORM HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      navigate("/user");
    }
  }, [formErrors, formValues, isSubmit, navigate]);

  const validate = (values) => {
    const errors = {};
    const regex =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!values.fullname) {
      errors.fullname = "Fullname is required";
    } else if (values.fullname.length < 3) {
      errors.fullname = "Fullname must be greater than 3";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Passwords must be greater than 4 characters";
    }
    if (values.rpassword !== values.password) {
      errors.rpassword = "Passwords doesn't match";
    } else if (!values.rpassword) {
      errors.rpassword = "Password is required";
    }
    return errors;
  };

  return (
    <>
      <div className="container mx-auto h-screen flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="inline-block login-form px-24 py-8"
        >
          <h1 className="font-sans text-center font-black text-3xl pb-8">
            Sign Up
          </h1>
          <div className="flex flex-col items-center gap-4 font-sans">
            <div className="username">
              <input
                name="fullname"
                type="text"
                placeholder="Full Name"
                className="input-field font-sans"
                value={formValues.fullname}
                onChange={handleChange}
              />
              <small className="font-sans text-red-500">
                {formErrors.fullname}
              </small>
            </div>
            <div className="email">
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="input-field font-sans"
                value={formValues.email}
                onChange={handleChange}
              />
              <small className="font-sans text-red-500">
                {formErrors.email}
              </small>
            </div>
            <div className="password">
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="input-field font-sans"
                value={formValues.password}
                onChange={handleChange}
              />
              <small className="font-sans text-red-500">
                {formErrors.password}
              </small>
            </div>
            <div className="retypepassword">
              <input
                name="rpassword"
                type="password"
                placeholder="Retype Password"
                className="input-field font-sans"
                value={formValues.rpassword}
                onChange={handleChange}
              />
              <small className="font-sans text-red-500">
                {formErrors.rpassword}
              </small>
            </div>
          </div>
          <div className="privacy flex gap-2 pb-8">
            <input
              type="radio"
              id="privacyCheckbox"
              checked="checked"
              required
            />
            <label htmlFor="checkbox" className="font-sans text-gray-400">
              By continuing, you accept our Privacy Policy
            </label>
          </div>
          <button
            type="submit"
            className="input-field text-center text-white font-sans sign-in-btn"
          >
            Sign Up
          </button>
          <p className="flex justify-center text-center p-4 gap-1 font-sans">
            Already have an account?
            <Link to="/login" className="font-sans font-bold underline">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUp;
