import { Link } from "react-router-dom";

const Height = () => {
  return (
    <>
      <div className="container mx-auto h-screen flex justify-center items-center">
        <form action="" className="inline-block login-form py-8 px-20">
          <h1 className="text-center font-sans text-2xl font-bold pb-8">
            What is your Height in Centimeters?
          </h1>
          <div className="inputfields flex flex-col gap-4 pb-8">
            <input
              type="number"
              className="input-field font-sans"
              placeholder="cm"
            />
          </div>
          <Link to="/weight">
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

export default Height;
