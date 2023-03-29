import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const ProtectedPages = () => {
  const { client } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!client) {
      navigate("/");
    }
  });

  return <>{client ? <Outlet /> : null}</>;
};

export default ProtectedPages;
