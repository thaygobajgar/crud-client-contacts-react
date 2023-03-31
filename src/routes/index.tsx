import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import React from "react";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import { ContactContextProvider } from "../contexts/ContactContext";
import ProtectedPages from "../pages/ProtectedPages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route element={<ProtectedPages />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      <Route path="*" element={<h1>404 Page not found</h1>} />
    </Routes>
  );
};

export default AppRoutes;
