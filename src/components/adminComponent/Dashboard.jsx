import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {

  const { admin } = useSelector((state) => state.adminReducer);

  return (
    <div>
      <div className="py-5 flex justify-center">
        <div className="bg-light p-5 w-3/4 flex flex-col items-center shadow-lg rounded-lg">
          <h2 className="text-center mb-4 text-2xl font-semibold">
            Welcome {admin}
          </h2>
          <p className="text-center mb-4">
          This is a boilerplate for MERN authentication that stores a JWT in
          an HTTP-Only cookie. It also uses Redux Toolkit and the React
          Bootstrap library
        </p>
          <img
            src={"https://media.tenor.com/rePDfDWO3XoAAAAd/hacking.gif"}
            alt={admin}
            className="w-80 h-44"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
