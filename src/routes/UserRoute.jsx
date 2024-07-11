import React from "react";
import { Route, Routes } from "react-router-dom";
import UserHome from "../pages/userPages/UserHome";
import UserSignup from "../pages/userPages/UserSignup";
import Otp from "../pages/userPages/Otp";
import UserLogin from "../pages/userPages/UserLogin";
import UserProfile from "../pages/userPages/UserProfile";

const UserRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<UserHome />} />
      <Route path="/signup" element={<UserSignup />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/profile" element={<UserProfile />} />
    </Routes>
  );
};

export default UserRoute;
