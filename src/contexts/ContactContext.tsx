import { createContext, useContext, useEffect, useState } from "react";
import {
  iContact,
  IContactRegister,
  iContactWithoutClient,
} from "../interfaces/contacts.interfaces";
import { api } from "../services/api";
import { useAuthContext } from "./AuthContext";
import { toast } from "react-toastify";
import axios from "axios";
export interface iContactContextProps {
  children: React.ReactNode;
}

export interface IContact {}

export interface iContactContext {
  contacts: iContactWithoutClient[];
  setContacts: React.Dispatch<React.SetStateAction<iContactWithoutClient[]>>;
  contactRegister: (data: IContactRegister) => void;
}
export const ContactContext = createContext<iContactContext>(
  {} as iContactContext
);
export const ContactContextProvider = ({ children }: iContactContextProps) => {
  const { client } = useAuthContext();
  const [contacts, setContacts] = useState<iContactWithoutClient[]>([]);

  useEffect(() => {
    if (client?.contacts) {
      setContacts(client.contacts);
    }
  }, [client]);

  const contactRegister = async (contactData: IContactRegister) => {
    try {
      const { data } = await api.post<iContact>("/contacts", contactData);
      // @ts-expect-error
      delete data.client;
      setContacts([...contacts, data]);
      toast.success(`Contato ${data.firstName} adicionado com sucesso!`);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
        toast.error(error.response?.data.message);
      }
    }
  };

  return (
    <ContactContext.Provider
      value={{
        contacts,
        setContacts,
        contactRegister,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export function useContactContext(): iContactContext {
  const context = useContext(ContactContext);
  return context;
}
