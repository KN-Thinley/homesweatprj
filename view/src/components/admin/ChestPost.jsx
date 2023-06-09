import AdminNav from "./AdminNav";
import Footer from "../Footer";
import Chestsvg from "../../components/svg/Chestsvg";
import ChestPosts from "./Post/ChestPost";

const ChestPost = () => {
  return (
    <>
      <AdminNav />
      <div className="content">
        <div className="chestworkouts flex flex-col justify-center items-center p-24">
          <Chestsvg />
          <h1 className="font-sans text-white text-5xl font-medium pt-4">
            Chest Workouts
          </h1>
        </div>
      </div>
      <div className="chest-workout-list">
        <ChestPosts />
      </div>
      <Footer />
    </>
  );
};

export default ChestPost;
