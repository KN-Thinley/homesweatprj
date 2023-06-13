import logo from "../assests/homesweatLogo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav
        className="flex items-center justify-center gap-4 md:gap-12 lg:gap-20 text-white text-3xl pt-12 expand-lg main-nav"
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
            <div className="ul-lists flex gap-12 md:gap-16 lg:gap-24 py-1">
              <Link to="/user" className=" text-lg md:text-xl lg:text-3xl">
                Home
              </Link>
              <Link to="/about-us" className="text-sm md:text-lg lg:text-3xl">
                About Us
              </Link>
              <Link to="/workouts" className="text-sm md:text-lg lg:text-3xl">
                Workouts
              </Link>
              <Link to="/blogs" className="text-sm md:text-lg lg:text-3xl">
                Blogs
              </Link>
              <Link to="/faq" className="text-sm md:text-lg lg:text-3xl">
                FAQ
              </Link>
            </div>
            <div className="get-started py-1 px-10">
              <Link to="/dashboard" className=" text-lg md:text-3xl">
                DASHBOARD
              </Link>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
