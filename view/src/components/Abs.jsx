import Navbar from "./Navbar";
import Abssvg from "../components/svg/Abssvg";
import Footer from "./Footer";
import AbsList from "./AbsList";

const Abs = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <div className="chestworkouts flex flex-col justify-center items-center p-24">
          <Abssvg />
          <h1 className="font-sans text-white text-5xl font-medium pt-4">
            Abs Workouts
          </h1>
        </div>
      </div>
      <div className="chest-workout-list">
        <AbsList />
      </div>
      <Footer />
    </>
  );
};

export default Abs;
