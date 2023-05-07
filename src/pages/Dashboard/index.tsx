import ContactList from "../../components/ContactList";
import Header from "../../components/Header";
import Main from "../../components/Main";
import { useContactContext } from "../../contexts/ContactContext";
import { StyledTitle } from "../../styles/typography";
import { StyledDashboard } from "./style";

const Dashboard = () => {
  const { contacts } = useContactContext();
  return (
    <div>
      <Header />
      <Main>
        <StyledDashboard>
          <StyledTitle
            tag="h1"
            fontWeight={600}
            fontSize="one"
            color="--brand-1"
          >
            Contatos:
          </StyledTitle>
          <div className="contacts">
            <ContactList contacts={contacts} />
          </div>
        </StyledDashboard>
      </Main>
    </div>
  );
};

export default Dashboard;
