import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPublic from "./adminPrivate/AdminPublic";
import AdminProtect from "./adminPrivate/AdminProtect";
import AdminLogin from "../pages/adminPages/AdminLogin";
import AdminDashboard from "../pages/adminPages/AdminDashboard";
import UserListPage from "../pages/adminPages/UserListPage";
import Error404 from "../components/error/Error404";
import Error500 from "../components/error/Error500";

const AdminRoute = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AdminPublic>
            <AdminLogin />
          </AdminPublic>
        }
      />
      <Route
        path="/dashboard"
        element={
          <AdminProtect>
            <AdminDashboard />
          </AdminProtect>
        }
      />
      <Route
        path="/userList"
        element={
          <AdminProtect>
            <UserListPage />
          </AdminProtect>
        }
      />

      <Route path="*" element={<Error404 />} />
      <Route path="/pageNotFound" element={<Error404 />} />
      <Route path="/error-500" element={<Error500 />} />
    </Routes>
  );
};

export default AdminRoute;
