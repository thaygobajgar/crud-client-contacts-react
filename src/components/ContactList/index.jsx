import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ContactContext } from "../../contexts/ContactContext";

import ContactCard from "./ContactCard";
import { StyledContactList } from "./style";
const ContactList = ({ contacts }) => {
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
