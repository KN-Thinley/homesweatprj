import Navbar from "./Navbar";
import Footer from "./Footer";
import Chestsvg from "../components/svg/Chestsvg";
import ReactPlayer from "react-player";

const Chest = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <div className="chestworkouts flex flex-col justify-center items-center">
          <Chestsvg />
          <h1 className="font-sans text-white text-5xl font-medium">
            Chest Workouts
          </h1>
        </div>
      </div>
      <div className="video flex justify-center items-center bg-black">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=oy2WTnhVT2w"
          controls={true}
        ></ReactPlayer>
      </div>
      <Footer />
    </>
  );
};

export default Chest;
