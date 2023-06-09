import Front from "./Front";
import Back from "./Back";
import { Link } from "react-router-dom";

const AdminWorkouts = () => {
  return (
    <>
      <div className="content">
        <div className="workout">
          <div className="workout-svg grid grid-cols-5 p-16">
            <div className="col1 col-span-2 text-white text-center">
              <Front />
            </div>
            <div className="col2 text-white text-center flex flex-col text-4xl gap-12 justify-center">
              <Link to="/admin/workouts/chest">
                <h1>Chest</h1>
              </Link>
              <Link to="/admin/workouts/arms">
                <h1>Arms</h1>
              </Link>
              <Link to="/admin/workouts/abs">
                <h1>Abs</h1>
              </Link>
              <Link to="/admin/workouts/backs">
                <h1>Back</h1>
              </Link>
              <Link to="/admin/workouts/legs">
                <h1>Legs</h1>
              </Link>
            </div>
            <div className="col3 col-span-2 text-white text-center">
              <Back />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminWorkouts;
