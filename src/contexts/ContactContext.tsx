import { createContext, useContext, useEffect, useState } from "react";
import { iContactWithoutClient, useAuthContext } from "./AuthContext";

export interface iContactContextProps {
  children: React.ReactNode;
}
export interface iContactContext {
  contacts: iContactWithoutClient[];
  setContacts: React.Dispatch<React.SetStateAction<iContactWithoutClient[]>>;
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
  return (
    <ContactContext.Provider
      value={{
        contacts,
        setContacts,
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
