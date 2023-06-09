import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Height = () => {
  const navigate = useNavigate();
  const [weight, setWeight] = useState("");

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleContinue = () => {
    if (weight) {
      sessionStorage.setItem("weight", weight);
      navigate("/pushupsandsquats");
    } else {
      alert("Please enter your weight");
    }
  };

  return (
    <>
      <div className="container mx-auto h-screen flex justify-center items-center">
        <form className="inline-block login-form py-8 px-20">
          <h1 className="text-center font-sans text-2xl font-bold pb-8">
            What is your Weight in Kilograms?
          </h1>
          <div className="inputfields flex flex-col gap-4 pb-8">
            <input
              value={weight}
              name="height"
              onChange={handleWeightChange}
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
