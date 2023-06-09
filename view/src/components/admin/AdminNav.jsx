import { Link } from "react-router-dom";
import logo from "../../assests/homesweatLogo.png";
import "../../index.css";

const AdminNav = () => {
  return (
    <>
      <nav className="flex items-center justify-center gap-20 text-white text-3xl pt-12 expand-lg bg-black">
        <div className="logo flex items-center justify-center gap-2">
          <img src={logo} className="h-8" alt="logo" />
          <h1>HomeSweat</h1>
        </div>
        <div className="lists flex items-center justify-center">
          <ul className="text-white flex">
            <div className="ul-list flex gap-24 py-1">
              <Link to="/admin/blog">Blogs</Link>
              <Link to="/admin/workouts">Workouts</Link>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default AdminNav;
