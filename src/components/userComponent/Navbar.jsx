import React, { useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { userLogout } from "../../reduxStore/slices/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userReducer);

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    dispatch(userLogout());
    toast.success("Logout Successfully");
    navigate("/login");
  };

  return (
    <>
      <Disclosure
        as="nav"
        className="bg-gradient-to-r from-gray-900 to-gray-700 shadow-lg"
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                {/* Mobile menu button */}
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                {/* Logo */}
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0">
                    <h1 className="text-white text-2xl font-extrabold tracking-wider">
                      Mern Auth
                    </h1>
                  </div>
                  {/* Desktop navigation links */}
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {/* Add navigation links here */}
                    </div>
                  </div>
                </div>

                {/* Profile/Login dropdown */}
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {user ? (
                    <Menu as="div" className="ml-3 relative">
                      <div>
                        <Menu.Button className="flex items-center justify-center rounded-full bg-gray-600 p-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-3 focus:ring-offset-gray-900 transition duration-300 ease-in-out transform hover:scale-110">
                          <svg
                            className="w-7 h-7 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Menu.Button>
                      </div>
                      <Transition
                        as={React.Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="px-4 py-3 border-b border-gray-200">
                            <span className="block text-sm font-semibold text-gray-900">
                              {user.name}
                            </span>
                            <span className="block text-sm text-gray-500 truncate">
                              {user.email}
                            </span>
                          </div>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/profile"
                                className={`block px-4 py-2 text-sm font-medium ${
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700"
                                } hover:bg-gray-100`}
                              >
                                Profile
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={handleLogout}
                                className={`block w-full text-left px-4 py-2 text-sm font-medium ${
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700"
                                } hover:bg-gray-100`}
                              >
                                Logout
                              </button>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  ) : (
                    <Link
                      to="/login"
                      className="flex items-center justify-center rounded-full bg-gray-600 p-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-3 focus:ring-offset-gray-900 transition duration-300 ease-in-out transform hover:scale-110"
                    >
                      <svg
                        className="w-7 h-7 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 8l4 4m0 0l-4 4m4-4H3m5 4v1a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H11a3 3 0 00-3 3v1"
                        />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {/* Mobile menu panel */}
            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {/* Add mobile menu items here */}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

    
    </>
  );
};

export default Navbar;
