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
            className="flex items-center px-3 py-2 focus:outline-none hover:bg-gray-200 hover:rounded-md"
            type="button"
            onClick={toggleDropdown}
          >
            <svg
                  className="absolute w-12 h-12 text-gray-400 -left-1"
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
            <span className="ml-4 text-sm hidden md:inline-block">{admin}</span>
            <svg
              className="fill-current w-3 ml-4 hidden md:inline-block"
              viewBox="0 0 407.437 407.437"
            >
              {/* Your SVG for dropdown arrow */}
            </svg>
          </button>
          {/* Dropdown menu */}
          {isDropDownOpen && (
            <div className="absolute z-10 mt-2 w-full md:w-auto md:right-0 md:left-0">
              <div className="bg-white border border-gray-400 shadow rounded">
                <ul>
                  <li
                    className="px-4 py-3 hover:bg-gray-200 cursor-pointer"
                    onClick={handleLogout}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default AdminNavbar;
