import React from "react";
import { Route, Routes } from "react-router-dom";
import UserHome from "../pages/userPages/UserHome";
import UserSignup from "../pages/userPages/UserSignup";
import Otp from "../pages/userPages/Otp";
import UserLogin from "../pages/userPages/UserLogin";
import UserProfile from "../pages/userPages/UserProfile";
import ForgetPassword from "../pages/userPages/ForgetPassword";
import ResetPassword from "../pages/userPages/ResetPassword";
import UserPublic from "./userPrivate/UserPublic";
import UserProtect from "./userPrivate/UserProtect";
import Error404 from "../components/error/Error404";
import Error500 from "../components/error/Error500";

const UserRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<UserHome />} />

      <Route
        path="/signup"
        element={
          <UserPublic>
            <UserSignup />
          </UserPublic>
        }
      />

      <Route
        path="/otp"
        element={
          <UserPublic>
            <Otp />
          </UserPublic>
        }
      />

      <Route
        path="/login"
        element={
          <UserPublic>
            <UserLogin />
          </UserPublic>
        }
      />

      <Route
        path="/forgetPassword"
        element={
          <UserPublic>
            <ForgetPassword />
          </UserPublic>
        }
      />

      <Route
        path="/resetPassword/:id/:token"
        element={
          <UserPublic>
            <ResetPassword />
          </UserPublic>
        }
      />

      <Route
        path="/profile"
        element={
          <UserProtect>
            <UserProfile />
          </UserProtect>
        }
      />

        <Route path="*" element={<Error404 />} />
      <Route path="/pageNotFound" element={<Error404 />} />
      <Route path="/error-500" element={<Error500 />} />
    </Routes>
  );
};

export default UserRoute;
