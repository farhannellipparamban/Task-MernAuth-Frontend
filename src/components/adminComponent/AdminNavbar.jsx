import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adminLogout } from "../../reduxStore/slices/adminSlice";
import { toast } from "react-toastify";

const AdminNavbar = () => {
  const [isDropDownOpen, setDropDownOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropDownOpen(!isDropDownOpen);
  };

  const { admin } = useSelector((state) => state.adminReducer);

  const handleLogout = async () => {
    localStorage.removeItem("adminToken");
    dispatch(adminLogout());
    toast.success("Logout successfully");
    navigate("/admin");
  };

  return (
    <header className="px-4 py-2 shadow">
      <div className="flex justify-between items-center ">
        <div className="flex items-center px-4">
          <img className="h-12 w-auto max-w-full align-middle" src="" alt="" />
          <div className="flex ml-3 flex-col">
          <>
            
            <span className="text-2xl font-semibold text-red-600 -ml-4 font-serif">
              Mern
              <span className="text-2xl font-semibold text-black">Auth</span>
            </span>
            
          </>
          </div>
        </div>
        

        <div className="relative">
          <button
            data-dropdown
            className="flex items-center px-4 py-2 bg-white text-gray-800 rounded-md shadow hover:bg-gray-100 focus:outline-none"
            type="button"
            onClick={toggleDropdown}
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="ml-4 text-sm font-medium hidden md:inline-block">
              {admin}
            </span>
            <svg
              className="w-4 h-4 ml-2 hidden md:inline-block"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          {isDropDownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg transition transform origin-top-right">
              <ul>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default AdminNavbar;
