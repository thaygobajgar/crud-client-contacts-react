import { StyledButton } from "../../styles/buttons";
import { MdSearch, MdNotifications } from "react-icons/md";
import { StyledHeader, StyledHeaderForm } from "./style";
import Container from "../container";
import { useAuthContext } from "../../contexts/AuthContext";
import { StyledText } from "../../styles/typography";

const Header = () => {
  const { client, clientLogout } = useAuthContext();
  return (
    <StyledHeader>
      <Container>
        Logo
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
          <StyledButton>
            <MdNotifications size={30} color="rgba(255,255,255,.5)" />
          </StyledButton>
          <img
            src="https://http2.mlstatic.com/D_NQ_NP_857361-MLB32561363740_102019-O.jpg"
            alt="nome do usuario"
          />
          <StyledText onClick={clientLogout} tag="span" fontSize={12}>
            Logout
          </StyledText>
        </div>
      </Container>
    </StyledHeader>
  );
};

export default Header;
