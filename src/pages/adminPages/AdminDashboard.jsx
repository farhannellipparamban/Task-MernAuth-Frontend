import React from "react";
import Dashboard from "../../components/adminComponent/Dashboard";
import AdminNavbar from "../../components/adminComponent/AdminNavbar";
import AdminSidebar from "../../components/adminComponent/AdminSidebar";

const AdminDashboard = () => {
  return (
    <>
      <AdminNavbar />
      <div className="mx-auto w-full flex">
        <AdminSidebar />
        <Dashboard />
      </div>
    </>
  );
};

export default AdminDashboard;
