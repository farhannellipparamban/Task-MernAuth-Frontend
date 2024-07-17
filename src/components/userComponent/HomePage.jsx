import React from "react";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { user } = useSelector((state) => state.userReducer);

  return (
    <div className="bg-gradient-to-r from-blue-100 to-purple-100 min-h-screen">
      <div className="py-16 flex justify-center">
        <div className="bg-white p-10 w-11/12 md:w-3/4 flex flex-col items-center font-serif shadow-2xl rounded-xl">
          <h2 className="text-center mb-8 text-3xl font-bold text-red-700 animate-pulse">
            Welcome {user ? user.name : "Developer"}
          </h2>
          <p className="text-center mb-10 text-md text-gray-700 leading-relaxed max-w-2xl">
            Dive into the world of coding and explore the endless possibilities!
            Whether you're a seasoned developer or just starting, our platform
            offers the tools and resources you need to succeed. Embrace the
            journey of learning, creating, and innovating with MERN stack
            technology.
          </p>

          <div className="max-w-md md:max-w-lg rounded-lg overflow-hidden shadow-2xl mb-10 transform hover:scale-105 transition duration-300">
            <img
              src="https://media.giphy.com/media/VgGthJTslDE2A/giphy.gif"
              alt={user ? user.name : "Coding gif"}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
