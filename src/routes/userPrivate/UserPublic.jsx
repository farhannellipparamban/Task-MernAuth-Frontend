import React from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import { userLogout } from "../../reduxStore/slices/userSlice";

const UserPublic = (props) => {
  const dispatch = useDispatch();
  try {
    const token = localStorage.getItem("userToken");
    if (token) {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp > currentTime) {
        return <Navigate to="/" />;
      } else {
        localStorage.removeItem("userToken");
        dispatch(userLogout());
        <Navigate to="/login" />;
        toast.info("You must login first");
        return props.children;
      }
    } else {
      <Navigate to="/login" />;
      return props.children;
    }
  } catch (error) {
    console.log(error.message);
  }
};

export default UserPublic;
