import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.userReducer);

  return (
    <>
      <div className="flex justify-center items-center bg-gray-200 min-h-screen">
        <div className="rounded-xl w-full md:w-3/5 overflow-hidden bg-white shadow-lg  my-16">
          <div className="px-6 py-8">
            <div className="text-center">
              <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
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
              </div>

              <h1 className="text-2xl font-bold text-gray-800">User Profile</h1>
              <p className="text-gray-600 text-sm">your profile information</p>
            </div>
            <hr className="my-4" />
            <div className="mt-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="firstName"
                >
                  Name
                </label>
                <input
                  className="w-full px-4 py-2 border rounded-md"
                  type="text"
                  id="firstName"
                  value={user.name}
                  disabled
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full px-4 py-2 border rounded-md"
                  type="email"
                  id="email"
                  value={user.email}
                  disabled
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  className="w-full px-4 py-2 border rounded-md"
                  type="text"
                  id="mobile"
                  name="mobile"
                  value={user.phone}
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
