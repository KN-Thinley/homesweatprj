import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // FORM VALIDATION
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, formValues, isSubmit]);

  const validate = (values) => {
    const errors = {};
    const regex =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

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
    return errors;
  };

  const PostData = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    const { email, password } = formValues;

    const res = await fetch("/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    if (res.status === 500 || !data) {
      setFormValues(initialValues);
    } else {
      navigate("/admin/blog");
    }
  };

  return (
    <>
      <div className="container mx-auto h-screen flex justify-center items-center">
        <form
          method="POST"
          onSubmit={handleSubmit}
          className="inline-block login-form px-28 py-16"
        >
          <h1 className="font-sans text-center font-black text-3xl pb-5">
            Sign In
          </h1>
          <div className="inputfields flex flex-col gap-4 pb-8">
            <div className="email flex flex-col">
              <input
                name="email"
                type="text"
                id="email"
                placeholder="Email"
                className="font-sans email p-3"
                value={formValues.email}
                onChange={handleChange}
              />
              <small className="font-sans text-red-500">
                {formErrors.email}
              </small>
            </div>
            <div className="password-div flex flex-col">
              <input
                name="password"
                type="password"
                id="input"
                placeholder="Password"
                className="font-sans password p-3"
                value={formValues.password}
                onChange={handleChange}
              />
              <small className="font-sans text-red-500">
                {formErrors.password}
              </small>
            </div>
          </div>
          <div className="sign-in-forgot-password flex flex-col">
            <button
              className="text-center text-white font-sans p-3 sign-in"
              onClick={PostData}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
