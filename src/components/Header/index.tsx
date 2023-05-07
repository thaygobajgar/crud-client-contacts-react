import { StyledButton } from "../../styles/buttons";
import { MdSearch, MdNotifications } from "react-icons/md";
import { StyledHeader, StyledHeaderForm } from "./style";
import Container from "../container";
import { useAuthContext } from "../../contexts/AuthContext";
import { StyledText } from "../../styles/typography";
import { VscAccount } from "react-icons/vsc";
import { StyledTextInput } from "../../styles/input";

const Header = () => {
  const { client, clientLogout } = useAuthContext();
  return (
    <StyledHeader>
      <Container>
        Logo
        {client && (
          <>
            <StyledHeaderForm action="">
              <StyledTextInput
                type="text"
                name="search"
                id="search"
                placeholder="Buscar..."
              />
              <StyledButton>
                <MdSearch size={20} color="rgba(255,255,255,.5)" />
              </StyledButton>
            </StyledHeaderForm>
            <div className="userMenu">
              <VscAccount />
              <StyledText>{client?.firstName}</StyledText>
              <StyledText
                onClick={clientLogout}
                tag="span"
                fontSize={12}
                className="logout"
              >
                Logout
              </StyledText>

              <div className="userToast">
                <button>Editar cadastro</button>
                <button>Deletar cadastro</button>
              </div>
            </div>
          </>
        )}
      </Container>
    </StyledHeader>
  );
};

export default Header;
