import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";

const AdminLogin = () => {
  const { user, api } = useAppSelector((state) => state.auth);

  if (api.refreshToken.status === "pending") {
    return <div>đang tải...</div>;
  }
  if (user) {
    return <Navigate to="/admin" />;
  }

  return <div>AdminLogin</div>;
};

export default AdminLogin;
