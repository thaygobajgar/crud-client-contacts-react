import React, { useContext, useEffect, useState } from "react";
import ContactList from "../../components/ContactList";
import Header from "../../components/Header";
import Main from "../../components/Main";
import { ContactContext } from "../../contexts/ContactContext";
import { api } from "../../services/api";
import { StyledButton } from "../../styles/buttons";
import { StyledText, StyledTitle } from "../../styles/typography";

const Dashboard = () => {
  const { contacts } = useContext(ContactContext);
  return (
    <div>
      <Header />
      <Main>
        <StyledTitle tag="h1" fontWeight={600} opacity={0.3} fontSize="one">
          Contacts
        </StyledTitle>

        <ContactList contacts={contacts} />
      </Main>
    </div>
  );
};

export default Dashboard;
