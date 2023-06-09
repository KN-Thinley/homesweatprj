import logo from "../assests/homesweatLogo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav
        className="flex items-center justify-center gap-20 text-white text-3xl pt-12 expand-lg main-nav"
        id="content"
      >
        <div className="logo flex items-center justify-center gap-2">
          <Link to="/user" className="flex justify-center items-center gap-2">
            <img src={logo} alt="/user" className="h-8" />
            <h1>Home Sweat</h1>
          </Link>
        </div>
        <div className="lists flex items-center justify-center">
          <ul className="text-white flex">
            <div className="ul-lists flex gap-24 py-1">
              <Link to="/user">Home</Link>
              <Link to="/about-us">About Us</Link>
              <Link to="/workouts">Workouts</Link>
              <Link to="/blogs">Blogs</Link>
              <Link to="/faq">FAQ</Link>
            </div>
            <div className="get-started py-1 px-10">
              <Link to="/dashboard">DASHBOARD</Link>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
