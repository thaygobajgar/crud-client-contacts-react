import { createContext, useContext, useEffect, useState } from "react";
import {
  iContact,
  IContactRegister,
  IContactUpdate,
  iContactWithoutClient,
} from "../interfaces/contacts.interfaces";
import { api } from "../services/api";
import { useAuthContext } from "./AuthContext";
import { toast } from "react-toastify";
import axios from "axios";
export interface iContactContextProps {
  children: React.ReactNode;
}

export interface iContactContext {
  contacts: iContactWithoutClient[];
  setContacts: React.Dispatch<React.SetStateAction<iContactWithoutClient[]>>;
  contactRegister: (data: IContactRegister) => void;
  contactUpdate: (data: IContactUpdate, id: string) => void;
  contactDelete: (id: string) => void;
  editContact: iContactWithoutClient;
  setEditContact: React.Dispatch<React.SetStateAction<iContactWithoutClient>>;
}
export const ContactContext = createContext<iContactContext>(
  {} as iContactContext
);
export const ContactContextProvider = ({ children }: iContactContextProps) => {
  const { client } = useAuthContext();
  const [contacts, setContacts] = useState<iContactWithoutClient[]>([]);
  const [editContact, setEditContact] = useState<iContactWithoutClient>(
    {} as iContactWithoutClient
  );
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
      toast.success(`Contato: ${data.firstName} adicionado com sucesso!`);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
        toast.error(error.response?.data.message);
      }
    }
  };

  const contactDelete = async (contactId: string) => {
    try {
      await api.delete<void>(`/contacts/${contactId}`);
      setContacts(
        contacts.filter((contact) => {
          return contact.id !== contactId;
        })
      );
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
        toast.error(error.response?.data.message);
      }
    }
  };

  const contactUpdate = async (
    contactData: IContactUpdate,
    contactId: string
  ) => {
    console.log(contactData);
    try {
      let newData: IContactUpdate = {};

      if (contactData.firstName) {
        if (contactData.firstName?.length > 0) {
          newData.firstName = contactData.firstName;
        }
      }
      if (contactData.lastName) {
        if (contactData.lastName?.length > 0) {
          newData.lastName = contactData.lastName;
        }
      }
      if (contactData.email) {
        if (contactData.email?.length > 0) {
          newData.email = contactData.email;
        }
      }
      if (contactData.phone) {
        if (contactData.phone?.length > 0) {
          newData.phone = contactData.phone;
        }
      }
      const { data } = await api.patch<iContact>(
        `/contacts/${contactId}`,
        newData
      );
      const newContactsData: iContactWithoutClient[] = contacts.map(
        (contact) => {
          if (contactId === contact.id) {
            return { ...contact, ...newData };
          } else {
            return contact;
          }
        }
      );

      setContacts(newContactsData);
      toast.success(`Contato: ${data.firstName} atualizado`);
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
        contactUpdate,
        editContact,
        setEditContact,
        contactDelete,
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
