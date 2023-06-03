import Armsvg from "../components/svg/Armsvg";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Arms = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <div className="chestworkouts flex flex-col justify-center items-center p-24">
          <Armsvg />
          <h1 className="font-sans text-white text-5xl font-medium pt-4">
            Arms Workouts
          </h1>
        </div>
      </div>
      <div className="chest-workout-list"></div>
      <Footer />
    </>
  );
};

export default Arms;
