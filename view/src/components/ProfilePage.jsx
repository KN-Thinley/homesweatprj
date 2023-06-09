import React, { useState, useEffect } from "react";
import Logo from "../assests/homesweat logo black.png";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "",
    height: "",
    weight: "",
    profilePic: "",
  });

  useEffect(() => {
    // Fetch user details from the database
    // You can replace this with your own logic to fetch data
    const fetchUserDetails = async () => {
      try {
        // Make an API call to fetch user details
        const response = await fetch("your-api-url");
        const userData = await response.json();

        // Set the user details in the state
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, []);

  const handleChangeProfilePic = (e) => {
    // Handle profile picture change
    // You can replace this with your own logic to upload the image to the server
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setUser((prevUser) => ({
          ...prevUser,
          profilePic: reader.result,
        }));
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="profile border-r-2 border-red-400 h-screen">
        <Link to="/user">
          <div className="logo flex justify-center items-center border-b-2 border-black p-4">
            <img src={Logo} alt="homesweat logo" className="h-8 text-black" />
          </div>
        </Link>
        <div className="user flex flex-col justify-between gap-36">
          <div className="profile flex flex-col justify-center items-center">
            <h1 className="font-sans font-bold text-2xl py-4">Profile</h1>
            <div className="flex flex-col justify-center items-center">
              <img
                src={user.profilePic}
                alt="Profile"
                className="rounded-full object-left object-cover h-24 w-24"
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleChangeProfilePic}
                className="hidden"
              />
            </div>
            <div className="">
              <span className="font-sans text-lg font-bold text-red-400">
                Jampel Namdag Dorji{user.name}
              </span>
            </div>
            <div className="height-weight flex pt-8">
              <div className="flex flex-col border-r-2 border-blue-200 px-8">
                <label className="font-sans font-semibold text-blue-600">
                  Height
                </label>
                <span className="font-bold text-blue-600 font-sans text-xl">
                  {user.height}176cm
                </span>
              </div>
              <div className="flex flex-col px-8">
                <label className="font-sans font-semibold text-blue-600">
                  Weight
                </label>
                <span className="font-bold text-blue-600 font-sans text-xl">
                  60kg{user.weight}
                </span>
              </div>
            </div>
          </div>
          <div className="settings flex flex-col justify-center items-center gap-4">
            <button className="border-black border-2 font-sans px-16 py-2 rounded">
              Settings
            </button>
            <button className="border-black border-2 font-sans px-16 py-2 rounded">
              Log Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
