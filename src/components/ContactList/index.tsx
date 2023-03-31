import React, { useContext } from "react";
import {
  AuthContext,
  iContact,
  iContactWithoutClient,
} from "../../contexts/AuthContext";
import { ContactContext } from "../../contexts/ContactContext";

import ContactCard from "./ContactCard";
import { StyledContactList } from "./style";

interface iContactListProps {
  contacts: iContactWithoutClient[];
}
const ContactList = ({ contacts }: iContactListProps) => {
  return (
    <StyledContactList>
      {contacts &&
        contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
    </StyledContactList>
  );
};

export default ContactList;
