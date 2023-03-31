import ContactList from "../../components/ContactList";
import Header from "../../components/Header";
import Main from "../../components/Main";
import { useContactContext } from "../../contexts/ContactContext";
import { StyledTitle } from "../../styles/typography";

const Dashboard = () => {
  const { contacts } = useContactContext();
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
