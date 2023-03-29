import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { AuthContext } from "./AuthContext";

export const ContactContext = createContext({});

export const ContactContextProvider = ({ children }) => {
  const { client } = useContext(AuthContext);
  const [contacts, setContacts] = useState([]);
  const [searchContact, setSearchContact] = useState("");
  const searchContactsList = contacts.filter((contact) => {
    return searchContact === ""
      ? true
      : contact.name.toLowerCase().includes(searchContact.toLocaleUpperCase());
  });
  useEffect(() => {
    console.log("oi");
    client?.contacts && setContacts(client.contacts);
  }, [client]);
  return (
    <ContactContext.Provider
      value={{
        contacts,
        setContacts,
        searchContact,
        setSearchContact,
        searchContactsList,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
