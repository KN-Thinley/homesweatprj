import AdminNav from "./AdminNav";
import Footer from "../Footer";
import Backsvg from "../../components/svg/Backsvg";
import BacksList from "./Post/BacksList";

const Backs = () => {
  return (
    <>
      <AdminNav />
      <div className="content">
        <div className="chestworkouts flex flex-col justify-center items-center p-24">
          <Backsvg />
          <h1 className="font-sans text-white text-5xl font-medium pt-4">
            Back Workouts
          </h1>
        </div>
      </div>
      <div className="chest-workout-list">
        <BacksList />
      </div>
      <Footer />
    </>
  );
};

export default Backs;
