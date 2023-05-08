import axios from "axios";
import { createContext, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  iClient,
  iClientLogin,
  iClientProfile,
  iClientRegister,
  iClientUpdate,
} from "../interfaces/client.interfaces";
import { api } from "../services/api";
import { updateClientSchema } from "../schemas/client.schemas";

export interface iAuthProviderProps {
  children: React.ReactNode;
}

export interface iAuthContext {
  client: iClientProfile | null;
  editModal: boolean;
  deleteModal: boolean;
  clientRegister: (data: iClientRegister) => void;
  clientLogin: (data: iClientLogin) => void;
  clientUpdate: (data: iClientUpdate) => void;
  clientLogout: () => void;
  deleteClient: () => void;
  setClient: React.Dispatch<React.SetStateAction<iClientProfile>>;
  setEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext<iAuthContext>({} as iAuthContext);

export const AuthProvider = ({ children }: iAuthProviderProps) => {
  const [client, setClient] = useState<iClientProfile>({} as iClientProfile);
  const [editModal, setEditModal] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
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
            localStorage.removeItem("@token");
          }
        }
      }
      if (!token) {
        navigate("/");
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

  const deleteClient = async () => {
    try {
      await api.delete<void>(`/clients/`);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);

        toast.error(error.response?.data.message);
      }
    }
  };

  const clientUpdate = async (clientData: iClientUpdate) => {
    try {
      const { data } = await api.patch<iClient>(`/clients/`, clientData);
      const newData: iClientProfile = { ...client, ...data };
      setClient(newData);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
        toast.error(error.response?.data.message);
      }
    }
  };

  const clientLogout = () => {
    setClient({} as iClientProfile);
    localStorage.removeItem("@token");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        client,
        setClient,
        clientRegister,
        clientLogin,
        clientLogout,
        clientUpdate,
        editModal,
        setEditModal,
        deleteModal,
        setDeleteModal,
        deleteClient,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthContext(): iAuthContext {
  const context = useContext(AuthContext);
  return context;
}
