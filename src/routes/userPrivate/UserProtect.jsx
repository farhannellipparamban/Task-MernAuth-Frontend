import React from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import { userLogout } from "../../reduxStore/slices/userSlice";

const UserProtect = (props) => {
  const dispatch = useDispatch();
  try {
    const token = localStorage.getItem("userToken");
    if (token) {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp > currentTime) {
        return props.children;
      } else {
        localStorage.removeItem("userToken");
        dispatch(userLogout());
        toast.info("You must login first");
        return <Navigate to="/login" />;
      }
    } else {
      toast.info("You must login first");
      return <Navigate to="/login" />;
    }
  } catch (error) {
    console.log(error.message);
  }
};

export default UserProtect;
