import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { admin } = useSelector((state) => state.adminReducer);

  return (
    <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 min-h-screen py-12 px-4 sm:px-6 lg:px-8  font-serif">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-full w-full object-cover md:w-56 md:h-full"
                src="https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif"
                alt="Admin Dashboard Coding"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">
                Admin Dashboard
              </div>
              <h2 className="mt-2 text-2xl leading-6 font-bold text-red-600 sm:text-2xl">
                Welcome, {admin ? admin : "Administrator"}
              </h2>
              <p className="mt-4 text-sm text-gray-500 leading-6">
                This admin dashboard provides powerful tools to manage the MERN
                stack application. Monitor server performance, manage user data,
                and configure system settings with ease. Leverage the power of
                MongoDB, Express, React, and Node.js to ensure smooth operations
                and optimal user experience.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <DashboardCard
            title="User Management"
            description="Manage user accounts, permissions, and roles."
            icon="👥"
            color="from-blue-400 to-blue-600"
          />
          <DashboardCard
            title="System Logs"
            description="View and analyze system logs and user activities."
            icon="📊"
            color="from-green-400 to-green-600"
          />
          <DashboardCard
            title="Settings"
            description="Configure system settings and preferences."
            icon="⚙️"
            color="from-yellow-400 to-yellow-600"
          />
        </div>
      </div>
    </div>
  );
};

const DashboardCard = ({ title, description, icon, color }) => (
  <div
    className={`bg-gradient-to-br ${color} rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300`}
  >
    <div className="px-6 py-8">
      <div className="flex items-center">
        <div className="flex-shrink-0 bg-white bg-opacity-30 rounded-full p-3">
          <span className="text-4xl">{icon}</span>
        </div>
        <div className="ml-5 w-0 flex-1">
          <dt className="text-xl font-bold text-white truncate">{title}</dt>
          <dd className="mt-2 text-base text-white text-opacity-80">
            {description}
          </dd>
        </div>
      </div>
    </div>
    <div className="bg-black bg-opacity-10 px-6 py-4">
      <div className="text-sm">
        <a
          href="/admin/userList"
          className="font-medium text-white hover:text-opacity-80 transition-colors duration-200"
        >
          View details →
        </a>
      </div>
    </div>
  </div>
);

export default Dashboard;
