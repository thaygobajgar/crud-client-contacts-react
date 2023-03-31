import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [client, setClient] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function clientAutoLogin() {
      const token = localStorage.getItem("@token");
      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
          const res = await api.get("/clients/profile");
          setClient(res.data);
          navigate("/dashboard");
        } catch (error) {
          console.log(error);
        }
      }
    }
    clientAutoLogin();
  }, []);

  const clientRegister = async (data) => {
    try {
      const res = await api.post("/clients", data);
      const login = await api.post("/login", data);
      localStorage.setItem("@token", login.data.token);
      api.defaults.headers.authorization = `Bearer ${login.data.token}`;

      setClient(res.data);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const clientLogin = async (data) => {
    try {
      const res = await api.post("/login", data);
      localStorage.setItem("@token", res.data.token);
      api.defaults.headers.authorization = `Bearer ${res.data.token}`;
      const client = await api.get(`/clients/profile`);
      setClient(client.data);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const clientLogout = async () => {
    setClient(null);
    localStorage.removeItem("@token");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ client, setClient, clientRegister, clientLogin, clientLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
