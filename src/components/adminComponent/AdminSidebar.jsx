import { faHome, faHotel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const location = useLocation();

  return (
    <div className="w-full sm:w-64 bg-white">
      <div className="h-screen pb-10">
        <div className="flex flex-col h-screen overflow-y-auto rounded-br-lg rounded-tr-xl bg-white shadow-lg shadow-gray-400">
          <div className="flex mt-6 flex-1 flex-col">
            <nav className="flex-1">
              <Link
                to="/admin/dashboard"
                className={
                  location.pathname === "/admin/dashboard"
                    ? "flex cursor-pointer items-center border-l-4 border-l-rose-600 py-5 px-5 text-sm font-medium text-rose-600 outline-none transition-all duration-100 ease-in-out focus:border-l-4"
                    : "flex cursor-pointer items-center border-l-rose-600 py-5 px-5 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600 focus:border-l-4"
                }
              >
                <FontAwesomeIcon
                  className="mr-4 h-5 w-5 align-middle"
                  icon={faHome}
                />
                Dashboard
              </Link>

              <Link
                to="/admin/userList"
                className={
                  location.pathname === "/admin/userList"
                    ? "flex cursor-pointer items-center border-l-4 border-l-rose-600 py-5 px-5 text-sm font-medium text-rose-600 outline-none transition-all duration-100 ease-in-out focus:border-l-4"
                    : "flex cursor-pointer items-center border-l-rose-600 py-5 px-5 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600 focus:border-l-4"
                }
              >
                <svg
                  className="mr-4 h-5 w-5 align-middle"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                  strokeWidth="2"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                Users
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
