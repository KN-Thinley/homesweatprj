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
      <Route path="/user" element={<User />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/workouts" element={<Workouts />} />
      <Route path="/admin/login" element={<AdminLogin />} />
    </Routes>
  );
}

export default App;
