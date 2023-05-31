import logo from "../assests/homesweatLogo.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import arrowwhite from "../assests/arrow.png";

const Footer = () => {
  return (
    <>
      <div className="footer bg-black py-8">
        <div className="scrollup flex items-center justify-center pb-8">
          <a href="#content">
            <img src={arrowwhite} alt="" />
          </a>
        </div>
        <div className="grid grid-cols-3 py-8">
          <div className="logo flex gap-2 justify-center ">
            <img src={logo} alt="" className="h-8" />
            <h2 className="text-white text-3xl">Home Sweat</h2>
          </div>
          <div className="quicklink text-white flex flex-col justify-center items-center">
            <h1 className="font-sans text-2xl font-medium">Quick Links</h1>
            <p className="font-sans text-gray-400">Home</p>
            <p className="font-sans text-gray-400">About Us</p>
            <p className="font-sans text-gray-400">Workouts</p>
            <p className="font-sans text-gray-400">Blog</p>
            <p className="font-sans text-gray-400">FAQ</p>
          </div>
          <div className="followUs flex flex-col  items-center gap-2">
            <h1 className="text-white font-sans text-2xl font-medium ">
              Follow Us
            </h1>
            <div className="icons flex gap-3">
              <FaFacebook style={{ color: "white" }} />
              <FaInstagram style={{ color: "white" }} />
              <FaTwitter style={{ color: "white" }} />
              <FaYoutube style={{ color: "white" }} />
            </div>
          </div>
        </div>
        <div className="border-white w-screen bg-white footer-line"></div>
        <div className="copyright pt-8">
          <h6 className="text-white font-sans text-center text-sm">
            Copyright © 2020. HomeSweat. All rights reserved.
          </h6>
        </div>
      </div>
    </>
  );
};

export default Footer;
