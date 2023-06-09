import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Height = () => {
  const navigate = useNavigate();
  const [height, setHeight] = useState("");

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleContinue = () => {
    if (height) {
      sessionStorage.setItem("height", height);
      navigate("/weight");
    } else {
      alert("Please enter your height");
    }
  };

  return (
    <>
      <div className="container mx-auto h-screen flex justify-center items-center">
        <form className="inline-block login-form py-8 px-20">
          <h1 className="text-center font-sans text-2xl font-bold pb-8">
            What is your Height in Centimeters?
          </h1>
          <div className="inputfields flex flex-col gap-4 pb-8">
            <input
              value={height}
              name="height"
              onChange={handleHeightChange}
              type="number"
              className="input-field font-sans"
              placeholder="cm"
            />
          </div>
          <button
            onClick={handleContinue}
            type="button"
            className="text-white font-sans p-3 sign-in"
          >
            Continue
          </button>
        </form>
      </div>
    </>
  );
};

export default Height;
