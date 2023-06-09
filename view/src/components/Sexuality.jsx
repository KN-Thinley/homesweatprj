import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sexuality = () => {
  const navigate = useNavigate();
  const [sexuality, setSexuality] = useState("");

  const handleSexualityChange = (e) => {
    setSexuality(e.target.value);
  };

  const handleContinue = () => {
    //save selected sexuality to session storage
    if (sexuality) {
      sessionStorage.setItem("sexuality", sexuality);
      navigate("/height");
    } else {
      alert("Please select");
    }
  };
  return (
    <>
      <div className="container mx-auto h-screen flex justify-center items-center">
        <form className="inline-block login-form py-8 px-20">
          <h1 className="text-center font-sans text-2xl font-bold pb-8">
            What is your Sex?
          </h1>
          <div className="inputfields flex flex-col gap-4 pb-8">
            <select
              name="sexuality"
              value={sexuality}
              className="input-field font-sans"
              onChange={handleSexualityChange}
              required
            >
              <option disabled selected value="">
                Select your sexuality
              </option>
              <option value="Male" className="font-sans">
                Male
              </option>
              <option value="Female" className="font-sans">
                Female
              </option>
            </select>
          </div>
          <button
            type="button"
            className="text-center text-white font-sans p-3 sign-in"
            onClick={handleContinue}
          >
            Continue
          </button>
        </form>
      </div>
    </>
  );
};

export default Sexuality;
