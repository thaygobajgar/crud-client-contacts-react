import { StyledButton } from "../../styles/buttons";
import { MdSearch, MdNotifications } from "react-icons/md";
import { StyledHeader, StyledHeaderForm } from "./style";
import Container from "../container";
import { useAuthContext } from "../../contexts/AuthContext";
import { StyledText } from "../../styles/typography";
import { VscAccount } from "react-icons/vsc";

const Header = () => {
  const { client, clientLogout } = useAuthContext();
  return (
    <StyledHeader>
      <Container>
        Logo
        {client && (
          <>
            <StyledHeaderForm action="">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Buscar..."
              />
              <StyledButton>
                <MdSearch size={30} color="rgba(255,255,255,.5)" />
              </StyledButton>
            </StyledHeaderForm>
            <div className="userMenu">
              <VscAccount />
              <StyledText>{client?.firstName}</StyledText>
              <StyledText onClick={clientLogout} tag="span" fontSize={12}>
                Logout
              </StyledText>
            </div>
          </>
        )}
      </Container>
    </StyledHeader>
  );
};

export default Header;
