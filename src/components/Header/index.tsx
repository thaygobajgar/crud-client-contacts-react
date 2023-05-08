import { StyledButton } from "../../styles/buttons";
import { MdSearch, MdNotifications } from "react-icons/md";
import { StyledHeader, StyledHeaderForm } from "./style";
import Container from "../container";
import { useAuthContext } from "../../contexts/AuthContext";
import { StyledText } from "../../styles/typography";
import { VscAccount } from "react-icons/vsc";
import { StyledTextInput } from "../../styles/input";
import { useState } from "react";
import Loader from "../Loader";

const Header = () => {
  const { client, clientLogout, setEditModal, setDeleteModal } =
    useAuthContext();
  const [userToast, setUserToast] = useState(false);
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
            <div className="userMenu" onClick={() => setUserToast(!userToast)}>
              <VscAccount />
              <StyledText>{client?.firstName}</StyledText>
              {userToast && (
                <div className="userToast">
                  <StyledText
                    onClick={() => setEditModal(true)}
                    tag="span"
                    fontSize={12}
                    className="edit"
                  >
                    Editar cadastro
                  </StyledText>
                  <StyledText
                    onClick={() => setDeleteModal(true)}
                    tag="span"
                    fontSize={12}
                    className="delete"
                  >
                    Deletar cadastro
                  </StyledText>
                  <StyledText
                    onClick={clientLogout}
                    tag="span"
                    fontSize={12}
                    className="logout"
                  >
                    Logout
                  </StyledText>
                </div>
              )}
            </div>
          </>
        )}
      </Container>
    </StyledHeader>
  );
};

export default Header;
