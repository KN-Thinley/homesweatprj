import "../index.css";
import logo from "../assests/homesweatLogo.png";
import runningMan from "../assests/runningman.png";
import pushups from "../assests/pushups.png";
import { FaMouse } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import arrowblack from "../assests/arrowblack.png";

const User = () => {
  return (
    <main>
      <section className="marketing-slogan-section" id="home">
        <nav className="flex items-center justify-center gap-10 text-white text-3xl pt-4 expand-lg">
          <div className="logo flex items-center justify-center gap-2">
            <Link to="/" className="flex justify-center items-center gap-2">
              <img src={logo} alt="#" className="h-8" />
              <h1>Home Sweat</h1>
            </Link>
          </div>
          <div className="lists flex items-center justify-center gap-2">
            <ul className="text-white flex">
              <div className="ul-lists flex gap-12 py-2">
                <Link to="/">Home</Link>
                <Link to="/about-us">About Us</Link>
                <Link to="/workouts">Workouts</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/faq">FAQ</Link>
              </div>
              <div className="get-started py-2 px-6">
                <Link to="/dashboard">DASHBOARD</Link>
              </div>
            </ul>
          </div>
        </nav>
        <div className="marketing-slogan-div flex justify-center items-center pt-40">
          <div className="inline-block marketing-slogan text-white py-10 px-5">
            <p className="text-5xl">Redefine your</p>
            <p className="text-9xl">BODY</p>
          </div>
        </div>
        <div className="scrolldown flex justify-end items-center text-white font-sans p-5">
          <FaMouse style={{ fontSize: "2rem" }} />
          Scroll down
        </div>
      </section>
      <section className="marketing-slogan-section2 flex justify-center items-center">
        <div className="inline-block marketing-slogan text-black py-20 px-5">
          <p className="text-4xl text-center">Get ready for a</p>
          <p className="text-8xl text-centers">CHANGE</p>
        </div>
      </section>
      <section className="about-us-section pt-10" id="about-us">
        <div className="about-us-div flex flex-col justify-center items-center">
          <h1 className="inline-block about-us-header text-7xl text-white text-center py-5">
            ABOUT US
          </h1>
          <div className="text text-center pt-12 text-white text-3xl px-40">
            <p className="pb-5">
              Welcome to Home Sweat, where we are commited to help people
              achieve their fitness goals and live healthier lives.
            </p>
            <hr />
            <p className="pt-5 pb-20">
              We are a team of passionate fitness enthusiasts, dedicated to
              providing high-quality content and resources to help people get
              fit and stay fit. Whether you are a beginner looking to start a
              fitness journey or a seasoned althlete seeking to take your
              workouts to next level, we are here to support and guide you.
            </p>
          </div>
          <button className="btn read-more-btn py-2 px-6">
            <Link to="/about-us">
              <div className="inline-block read-more text-white text-3xl">
                Read More
              </div>
            </Link>
          </button>
        </div>
      </section>
      <section
        className="workout-and-blogs-section flex justify-center items-center"
        id="workouts"
      >
        <div className="workouts-and-blogs-div grid grid-cols-5 gap-10">
          <div className="blog-container col-span-3 p-10">
            <div className="flex gap-28">
              <h1 className="underline text-7xl blog-text">Blog</h1>
              <h2 className="text-5xl text-white pt-12">
                GET TIPS AND TRICKS !
              </h2>
            </div>
            <div className="flex text-white gap-10">
              <img src={runningMan} alt="" />
              <div className="start">
                <h2 className="text-4xl">START AT HOME</h2>
                <p className="text-2xl">
                  Get tips and tricks to make sure your transform to your best
                  version
                </p>
                <h2 className="flex pt-8 text-3xl">
                  CHECK OUR BLOG <span className="line px-6">━━━━━━━</span>
                  <Link to="/blog">
                    <input
                      type="button"
                      className="blog-btn px-8 text-2xl"
                      value="BLOG"
                    />
                  </Link>
                </h2>
              </div>
            </div>
          </div>
          <div className="workouts-container col-span-2">
            <h2 className="text-5xl p-8 text-white">
              GET FIT AT HOME, SWEAT IT OUT, NO GYM REQUIRED!
            </h2>
            <div className="flex justify-center items-center">
              <img src={pushups} className="h-10" alt="pushups" />
            </div>
            <div className="workouts-sections flex flex-col justify-center items-center pb-5">
              <h1 className="underline text-center text-white text-3xl p-5">
                WORKOUTS WE OFFER
              </h1>
              <Link to="/workouts">
                <input
                  type="button"
                  className="text-center click-here py-1 px-8"
                  value="CLICK HERE     ---⇀"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="faq-section" id="faq">
        <div className="flex flex-col items-center justify-cente pt-8 ">
          <h1 className="text-center text-8xl faq-heading inline-block py-4 px-20">
            FAQ
          </h1>
          <div className="faq-lists grid grid-cols-2 gap-8 p-12">
            <div className="first-col grid gap-12">
              <div className="question1">
                <h2 className="text-2xl font-sans font-bold">
                  What kinds of workouts do you offer?
                </h2>
                <p className="text-xl font-sans">
                  We offer a variety of workouts that you can do at home with
                  little or no equipment, including cardio, strength training,
                  HIIT, yoga or Pilates
                </p>
              </div>
              <div className="question2">
                <h2 className="text-2xl font-sans font-bold">
                  Where are you based?
                </h2>
                <p className="text-xl font-sans">
                  We are based at Gyalpozhing College of Information Technology,
                  Gyalpozhing, Monggar, Bhutan
                </p>
              </div>
            </div>
            <div className="second-col grid gap-12">
              <div className="question3">
                <h2 className="text-2xl font-sans font-bold">
                  Who are your main target audience?
                </h2>
                <p className="text-xl font-sans">
                  Our main target audience are people who have busy schedules
                  and have very less time for themeselves. Homesweat aims to
                  keeps its users up to date with their works and also keep them
                  healthy in their lives.
                </p>
              </div>
              <div className="question4">
                <h2 className="text-2xl font-sans font-bold">
                  Why Home Sweat over other website on the internet?
                </h2>
                <p className="text-xl font-sans">
                  Home Sweat provides features such as segregating exercises and
                  workouts based on their body weight and height, choosing what
                  is best for them.
                </p>
              </div>
            </div>
          </div>
          <div className="scrollup">
            <a href="#home">
              <img src={arrowblack} alt="" />
            </a>
          </div>
        </div>
      </section>
      <section className="footer">
        <div className="footer bg-black py-8">
          <div className="grid grid-cols-3 pb-8">
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
          <hr className="footer-hr" />
          <div className="copyright pt-8">
            <h6 className="text-white font-sans text-center text-sm">
              Copyright © 2023. HomeSweat. All rights reserved.
            </h6>
          </div>
        </div>
      </section>
    </main>
  );
};

export default User;
