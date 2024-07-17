import React from "react";
import AdminNavbar from "../../components/adminComponent/AdminNavbar";
import AdminSidebar from "../../components/adminComponent/AdminSidebar";
import UserList from "../../components/adminComponent/UserList";

const UserListPage = () => {
  return (
    <>
      <AdminNavbar />
      <div className="mx-auto w-full flex">
        <AdminSidebar />
        <UserList />
      </div>
    </>
  );
};

export default UserListPage;
