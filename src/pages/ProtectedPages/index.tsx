import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext, useAuthContext } from "../../contexts/AuthContext";

const ProtectedPages = () => {
  const { client } = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (!client) {
      navigate("/");
    }
  });

  return <>{client ? <Outlet /> : null}</>;
};

export default ProtectedPages;
