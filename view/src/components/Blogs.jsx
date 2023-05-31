import Navbar from "./Navbar";
import ichi from "../assests/blogs/blog一.png";
import ni from "../assests/blogs/二.png";
import san from "../assests/blogs/三.png";
import yon from "../assests/blogs/四.png";
import go from "../assests/blogs/五.png";
import roku from "../assests/blogs/六.png";
import nana from "../assests/blogs/七.png";
import hachi from "../assests/blogs/八.png";
import kyuu from "../assests/blogs/九.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";
const Blogs = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <div className="aboutus flex justify-center pt-32">
          <div className="about-us-box inline-block p-16">
            <h1 className="text-7xl text-center text-white">Blogs</h1>
          </div>
        </div>

        <div className="blogs-container grid grid-cols-3 p-8 gap-8 pt-40">
          <div className="col1 flex flex-col gap-28">
            <div className="blog1">
              <div className="image">
                <img src={ichi} alt="" />
              </div>
              <div className="blog text font-sans text-white flex flex-col gap-8">
                <h1 className="font-sans font-bold text-3xl py-4">
                  Losing Weight 101
                </h1>
                <p className="font-sans font-light">
                  Want to lose weigth? With some tips and tricks, lose weight
                  easily!
                </p>

                <Link to="#">
                  <button className="underline font-sans font-medium text-start text-xl">
                    View Post
                  </button>
                </Link>
              </div>
            </div>
            <div className="blog2">
              <div className="image">
                <img src={ni} alt="" />
              </div>
              <div className="blog text font-sans text-white flex flex-col gap-8">
                <h1 className="font-sans font-bold text-3xl py-4">
                  Importance of Stretching
                </h1>
                <p className="font-sans font-light">
                  A simple stretch can do miracles and its something everyone
                  should know!
                </p>
                <Link to="#">
                  <button className="underline font-sans font-medium text-start text-xl">
                    View Post
                  </button>
                </Link>
              </div>
            </div>
            <div className="blog3">
              <div className="image">
                <img src={san} alt="" />
              </div>
              <div className="blog text font-sans text-white flex flex-col gap-8">
                <h1 className="font-sans font-bold text-3xl py-4">
                  Benefits of yoga
                </h1>
                <p className="font-sans font-light">
                  Yoga has been around for more than centuries and has proven to
                  be one of the best forms of exerise!
                </p>

                <Link to="#">
                  <button className="underline font-sans font-medium text-start text-xl">
                    View Post
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col2 flex flex-col gap-28">
            <div className="blog1">
              <div className="image">
                <img src={yon} alt="" />
              </div>
              <div className="blog text font-sans text-white flex flex-col gap-8">
                <h1 className="font-sans font-bold text-3xl py-4">
                  Benefits of Jogging
                </h1>
                <p className="font-sans font-light">
                  A simple jog can have many benefits which you may not know!
                </p>

                <Link to="#">
                  <button className="underline font-sans font-medium text-start text-xl">
                    View Post
                  </button>
                </Link>
              </div>
            </div>
            <div className="blog2">
              <div className="image">
                <img src={go} alt="" />
              </div>
              <div className="blog text font-sans text-white flex flex-col gap-8">
                <h1 className="font-sans font-bold text-3xl py-4">
                  Breathe Right
                </h1>
                <p className="font-sans font-light">
                  We all breathe everyday but are you doing it right? Proper
                  breathing technique can have many benefits!
                </p>

                <Link to="#">
                  <button className="underline font-sans font-medium text-start text-xl">
                    View Post
                  </button>
                </Link>
              </div>
            </div>
            <div className="blog3">
              <div className="image">
                <img src={roku} alt="" />
              </div>
              <div className="blog text font-sans text-white flex flex-col gap-8">
                <h1 className="font-sans font-bold text-3xl py-4">
                  Pushups - the ultimate exercise
                </h1>
                <p className="font-sans font-light">
                  The best exercise for strength, something that everyone should
                  be doing!
                </p>

                <Link to="#">
                  <button className="underline font-sans font-medium text-start text-xl">
                    View Post
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col3 flex flex-col gap-28">
            <div className="blog1">
              <div className="image">
                <img src={nana} alt="" />
              </div>
              <div className="blog text font-sans text-white flex flex-col gap-8">
                <h1 className="font-sans font-bold text-3xl py-4">
                  Benefits of Cardio
                </h1>
                <p className="font-sans font-light">
                  Something which many people can miss out on that can have many
                  health benefit of learning about cardio!
                </p>

                <Link to="#">
                  <button className="underline font-sans font-medium text-start text-xl">
                    View Post
                  </button>
                </Link>
              </div>
            </div>
            <div className="blog2">
              <div className="image">
                <img src={hachi} alt="" />
              </div>
              <div className="blog text font-sans text-white flex flex-col gap-8">
                <h1 className="font-sans font-bold text-3xl py-4">
                  Benefits of Sports
                </h1>
                <p className="font-sans font-light">
                  Playing sports is not just fun but it can also have many
                  health benefits
                </p>

                <Link to="#">
                  <button className="underline font-sans font-medium text-start text-xl">
                    View Post
                  </button>
                </Link>
              </div>
            </div>
            <div className="blog3">
              <div className="image">
                <img src={kyuu} alt="" />
              </div>
              <div className="blog text font-sans text-white flex flex-col gap-8">
                <h1 className="font-sans font-bold text-3xl py-4">
                  Importance of Squats
                </h1>
                <p className="font-sans font-light">
                  A powerful move that can improve your lower body. It is the
                  pinnacle of all lower body exercises
                </p>

                <Link to="#">
                  <button className="underline font-sans font-medium text-start text-xl">
                    View Post
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
