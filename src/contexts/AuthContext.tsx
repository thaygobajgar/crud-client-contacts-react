import axios from "axios";
import { createContext, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export interface iContact {
  firstName: string;
  lastName: string | null;
  email: string;
  phone: string;
  id: string;
  createdAt: string;
  deletedAt: string | null;
  updatedAt: string | null;
  client: iClient;
}

export interface iContactWithoutClient {
  firstName: string;
  lastName: string | null;
  email: string;
  phone: string;
  id: string;
  createdAt: string;
  deletedAt: string | null;
  updatedAt: string | null;
}

export interface iClient {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  id: string;
  createdAt: string;
  deletedAt: string | null;
  updatedAt: string | null;
  isAdm: boolean;
  isActive: boolean;
}

export interface iClientProfile {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  id: string;
  createdAt: string;
  deletedAt: string | null;
  updatedAt: string | null;
  isAdm: boolean;
  isActive: boolean;
  contacts: iContactWithoutClient[];
}

export interface iClientRegister {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  id: string;
  password: string;
  confirmPassword: string;
}

export interface iClientLogin {
  email: string;
  password: string;
}

export interface iAuthProviderProps {
  children: React.ReactNode;
}

export interface iAuthContext {
  client: iClientProfile | null;
  clientRegister: (data: iClientRegister) => void;
  clientLogin: (data: iClientLogin) => void;
  clientLogout: () => void;
  setClient: React.Dispatch<React.SetStateAction<iClientProfile | null>>;
}

export const AuthContext = createContext<iAuthContext>({} as iAuthContext);

export const AuthProvider = ({ children }: iAuthProviderProps) => {
  const [client, setClient] = useState<iClientProfile | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function clientAutoLogin() {
      const token = localStorage.getItem("@token");
      if (token) {
        api.defaults.headers.authorization = `Bearer ${token}`;
        try {
          const res = await api.get<iClientProfile>("/clients/profile");
          setClient(res.data);
          toast.success(
            `Bem vindo(a) ${client?.firstName} ${client?.lastName}`
          );
          navigate("/dashboard");
        } catch (error) {
          if (axios.isAxiosError(error)) {
            console.log(error);
            toast.error(error.response?.data.message);
          }
        }
      }
    }
    clientAutoLogin();
  }, []);

  const clientRegister = async (data: iClientRegister) => {
    try {
      const res = await api.post("/clients", data);
      const login = await api.post("/login", data);
      localStorage.setItem("@token", login.data.token);
      api.defaults.headers.authorization = `Bearer ${login.data.token}`;

      setClient(res.data);
      navigate("/dashboard");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
        toast.error(error.response?.data.message);
      }
    }
  };

  const clientLogin = async (data: iClientLogin) => {
    try {
      const res = await api.post("/login", data);
      localStorage.setItem("@token", res.data.token);
      api.defaults.headers.authorization = `Bearer ${res.data.token}`;
      const client = await api.get<iClientProfile>(`/clients/profile`);
      setClient(client.data);
      navigate("/dashboard");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);

        toast.error(error.response?.data.message);
      }
    }
  };

  const clientLogout = () => {
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

export function useAuthContext(): iAuthContext {
  const context = useContext(AuthContext);
  return context;
}
