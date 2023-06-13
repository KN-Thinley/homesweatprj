import Navbar from "./Navbar";
import Footer from "./Footer";
import Front from "./Front";
import Back from "./Back";
import { Link } from "react-router-dom";

const Workouts = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <div className="aboutus flex justify-center pt-32">
          <div className="about-us-box inline-block p-16">
            <h1 className="text-7xl text-center text-white">Workouts</h1>
          </div>
        </div>

        <div className="workout">
          <h1 className="font-sans text-white text-center text-4xl pt-32">
            Which muscle would you like to train?
          </h1>
          <div className="workout-svg grid justify-center items-center lg:grid-cols-5 p-16">
            <div className="col1 col-span-2 text-white text-center">
              <Front />
            </div>
            <div className="col2 text-white text-center flex flex-col text-4xl gap-12 justify-center items-center">
              <Link to="/workouts/chest">
                <h1>Chest</h1>
              </Link>
              <Link to="/workouts/arms">
                <h1>Arms</h1>
              </Link>
              <Link to="/workouts/abs">
                <h1>Abs</h1>
              </Link>
              <Link to="/workouts/back">
                <h1>Back</h1>
              </Link>
              <Link to="/workouts/legs">
                <h1>Legs</h1>
              </Link>
            </div>
            <div className="col3 col-span-2 text-white text-center">
              <Back />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Workouts;
