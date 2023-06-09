import AdminNav from "./AdminNav";
import Footer from "../Footer";
import Legsvg from "../../components/svg/Legsvg";
import LegsList from "./Post/LegsList";

const Legs = () => {
  return (
    <>
      <AdminNav />
      <div className="content">
        <div className="chestworkouts flex flex-col justify-center items-center p-24">
          <Legsvg />
          <h1 className="font-sans text-white text-5xl font-medium pt-4">
            Legs Workouts
          </h1>
        </div>
      </div>
      <div className="chest-workout-list">
        <LegsList />
      </div>
      <Footer />
    </>
  );
};

export default Legs;
