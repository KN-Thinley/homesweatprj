import { Link } from "react-router-dom";

const Sexuality = () => {
  return (
    <>
      <div className="container mx-auto h-screen flex justify-center items-center">
        <form action="" className="inline-block login-form py-8 px-20">
          <h1 className="text-center font-sans text-2xl font-bold pb-8">
            What is your Sex?
          </h1>
          <div className="inputfields flex flex-col gap-4 pb-8">
            <select name="" id="" className="input-field font-sans">
              <option value="Male" className="font-sans">
                Male
              </option>
              <option value="Female" className="font-sans">
                Female
              </option>
            </select>
          </div>
          <Link to="/height">
            <input
              type="button"
              value="Continue"
              className="text-center text-white font-sans p-3 sign-in"
            />
          </Link>
        </form>
      </div>
    </>
  );
};

export default Sexuality;
