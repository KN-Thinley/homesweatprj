import React, { useState, useEffect } from "react";
import Logo from "../assests/homesweat logo black.png";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "",
    height: "",
    weight: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [file, setFile] = useState(null);
  const [profilePicPreview, setProfilePicPreview] = useState("");

  useEffect(() => {
    // Fetch user details from the database
    // You can replace this with your own logic to fetch data
    const fetchUserDetails = async () => {
      try {
        // Make an API call to fetch user details
        const response = await fetch("/user/getUser");
        const userData = await response.json();

        // Set the user details in the state
        setUser(userData);
        setFile(userData.profilePic);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, []);

  const handleChangeProfilePic = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setProfilePicPreview(reader.result);
        setUser((prevUser) => ({
          ...prevUser,
          profilePic: file,
        }));
      };

      reader.readAsDataURL(file);
    }
    setFile(file);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = async () => {
    if (!user.name) {
      alert("Set a valid user name");
      return;
    }
    if (!user.height) {
      alert("Set a valid height");
      return;
    }
    if (!user.weight) {
      alert("Set a valid weight");
      return;
    } else {
      setEditMode(false);
    }

    try {
      const formData = new FormData();
      formData.append("name", user.name);
      formData.append("height", user.height);
      formData.append("weight", user.weight);
      formData.append("profilePic", file);

      // Make a POST request to update the user profile
      const response = await fetch("/user/updateUser", {
        method: "PUT",
        body: formData,
      });

      if (response.ok) {
        setEditMode(false);
      } else {
        alert("Failed to update user details");
      }
    } catch (error) {
      console.error("Error updating user details:", error);
      alert("An error occurred while updating user details");
    }
    window.location.reload();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleLogout = async () => {
    try {
      const response = await fetch("/user/logout");
      if (response.ok) {
        window.open("/login", "_self");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="profile border-r shadow-md shadow-slate-500  h-screen">
        <Link to="/user">
          <div className="logo flex justify-center items-center border-b border-black p-4">
            <img src={Logo} alt="homesweat logo" className="h-8 text-black" />
          </div>
        </Link>
        <div className="user flex flex-col justify-between gap-36">
          <div className="profile flex flex-col justify-center items-center">
            <h1 className="font-sans font-bold text-2xl py-4">Profile</h1>
            <div className="flex flex-col justify-center items-center">
              {editMode ? (
                <div className="edit_image flex flex-col justify-center items-center">
                  {profilePicPreview ? (
                    <img
                      src={profilePicPreview}
                      alt="Profile Preview"
                      className="rounded-full object-left object-cover h-24 w-24"
                    />
                  ) : (
                    <div className="profile_placeholder rounded-full object-left object-cover h-24 w-24" />
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleChangeProfilePic}
                  />
                </div>
              ) : (
                <img
                  src={`/uploads/${file}`}
                  alt="Profile"
                  className="rounded-full object-left object-cover h-24 w-24"
                />
              )}
            </div>
            <div className="">
              {editMode ? (
                <div className="editName">
                  <label
                    htmlFor="name"
                    className=" font-sans font-semibold text-lg text-red-400 flex justify-center items-center flex-col"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleInputChange}
                    className="font-sans text-lg font-bold text-red-400 border-red-500 border-2 focus:outline-none"
                  />
                </div>
              ) : (
                <span className="font-sans text-lg font-bold text-red-400">
                  {user.name}
                </span>
              )}
            </div>
            <div className="height-weight flex pt-8">
              <div className="flex flex-col border-r-2 border-blue-200 px-8">
                <label className="font-sans font-semibold text-blue-600">
                  Height
                </label>
                {editMode ? (
                  <input
                    type="number"
                    name="height"
                    value={user.height}
                    onChange={handleInputChange}
                    className="font-bold text-blue-600 font-sans text-xl w-16 border-red-500 border-2 focus:outline-none"
                  />
                ) : (
                  <span className="font-bold text-blue-600 font-sans text-xl">
                    {user.height}
                  </span>
                )}
              </div>
              <div className="flex flex-col px-8">
                <label className="font-sans font-semibold text-blue-600">
                  Weight
                </label>
                {editMode ? (
                  <input
                    type="number"
                    name="weight"
                    value={user.weight}
                    onChange={handleInputChange}
                    className="font-bold text-blue-600 font-sans text-xl w-16 border-red-500 border-2 focus:outline-none"
                  />
                ) : (
                  <span className="font-bold text-blue-600 font-sans text-xl">
                    {user.weight}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="settings flex flex-col justify-center items-center gap-4">
            {editMode ? (
              <button
                className="border-black border font-sans px-16 py-2 rounded"
                onClick={handleSave}
              >
                Save
              </button>
            ) : (
              <button
                className="border-black border font-sans px-16 py-2 rounded"
                onClick={handleEdit}
              >
                Edit
              </button>
            )}
            <button
              className="border-gray-800 border font-sans px-12 py-2 rounded"
              onClick={handleLogout}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
