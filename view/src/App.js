import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import SignUp from "./components/SignUp";
import Confirmation from "./components/Confirmation";
import Sexuality from "./components/Sexuality";
import Height from "./components/Height";
import Weight from "./components/Weight";
import PushupsandSquats from "./components/PushupsandSquats";
import User from "./components/User";
import AboutUs from "./components/AboutUs";
import Faq from "./components/Faq";
// import Footer from "./components/Footer";
import Blogs from "./components/Blogs";
import Workouts from "./components/Workouts";
import AdminLogin from "./components/admin/AdminLogin";
import AdminBlogs from "./components/admin/AdminBlogs";
import Chest from "./components/Chest";
import Backs from "./components/Backs";
import Abs from "./components/Abs";
import Arms from "./components/Arms";
import Legs from "./components/Legs";
import Dashboard from "./components/Dashboard";
import SingleBlogPage from "./components/admin/SingleBlogPage";
import AdminVideos from "./components/admin/AdminVideos";
import ChestPost from "./components/admin/ChestPost";
import LegsPost from "./components/admin/LegsPost";
import AbsPost from "./components/admin/AbsPost";
import ArmsPost from "./components/admin/ArmsPost";
import BacksPost from "./components/admin/BacksPost";
import ChestPosts from "./components/admin/Post/ChestPost";
import SingleVideoPage from "./components/admin/Post/SingleVideoPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/sexuality" element={<Sexuality />} />
      <Route path="/height" element={<Height />} />
      <Route path="/weight" element={<Weight />} />
      <Route path="/pushupsandsquats" element={<PushupsandSquats />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/blog/" element={<AdminBlogs />} />
      <Route path="/admin/workouts/" element={<AdminVideos />} />
      <Route path="/admin/workouts/chest" element={<ChestPost />} />
      <Route path="/admin/workouts/abs" element={<AbsPost />} />
      <Route path="/admin/workouts/arms" element={<ArmsPost />} />
      <Route path="/admin/workouts/legs" element={<LegsPost />} />
      <Route path="/admin/workouts/legs" element={<LegsPost />} />
      <Route path="/videos/chest" exact component={ChestPosts} />
      <Route
        path="/videos/chest/:videoId"
        render={(props) => <SingleVideoPage {...props} />}
      />

      <Route path="/user" element={<User />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/workouts" element={<Workouts />} />
      <Route path="/workouts/chest" element={<Chest />} />
      <Route path="/workouts/back" element={<Backs />} />
      <Route path="/workouts/arms" element={<Arms />} />
      <Route path="/workouts/legs" element={<Legs />} />
      <Route path="/workouts/abs" element={<Abs />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/blog/:id" element={<SingleBlogPage />} />
    </Routes>
  );
}

export default App;
