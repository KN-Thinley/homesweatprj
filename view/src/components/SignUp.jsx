import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <>
      <div className="container mx-auto h-screen flex justify-center items-center">
        <form action="" className="inline-block login-form px-24 py-8">
          <h1 className="font-sans text-center font-black text-3xl pb-8">
            Sign Up
          </h1>
          <div className="flex flex-col items-center gap-4 font-sans">
            <div className="username">
              <input
                type="text"
                placeholder="Full Name"
                className="input-field font-sans"
              />
              <small className="font-sans text-red-500"></small>
            </div>
            <div className="email">
              <input
                type="email"
                placeholder="Email"
                className="input-field font-sans"
              />
              <small className="font-sans text-red-500"></small>
            </div>
            <div className="password">
              <input
                type="password"
                placeholder="Password"
                className="input-field font-sans"
              />
              <small className="font-sans text-red-500"></small>
            </div>
            <div className="retypepassword">
              <input
                type="password"
                placeholder="Retype Password"
                className="input-field font-sans"
              />
              <small className="font-sans text-red-500"></small>
            </div>
          </div>
          <div className="privacy flex gap-2 pb-8">
            <input type="radio" />
            <label htmlFor="checkbox" className="font-sans text-gray-400">
              By continuing, you accept our Privacy Policy
            </label>
          </div>
          <Link to="/sexuality">
            <input
              type="button"
              value="Sign Up"
              className="input-field text-center text-white font-sans sign-in-btn"
            />
          </Link>
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
