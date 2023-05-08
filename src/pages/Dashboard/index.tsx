import ContactList from "../../components/ContactList";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Modal from "../../components/Modal";
import RegisterClientForm from "../../components/RegisterClientForm";
import { useAuthContext } from "../../contexts/AuthContext";
import { useContactContext } from "../../contexts/ContactContext";
import { StyledButton } from "../../styles/buttons";
import { StyledTitle } from "../../styles/typography";
import { StyledDashboard } from "./style";

const Dashboard = () => {
  const { contacts } = useContactContext();
  const { editModal, setEditModal, deleteModal, setDeleteModal, deleteClient } =
    useAuthContext();

  const handleEditModal = () => {
    setEditModal(!editModal);
  };
  const handleDeleteModal = () => {
    setDeleteModal(!deleteModal);
  };
  return (
    <div>
      <Header />
      <Main>
        <StyledDashboard>
          {editModal && (
            <Modal handleModal={handleEditModal} title="Atualizar informações">
              <RegisterClientForm handleModal={handleEditModal} />
            </Modal>
          )}
          {deleteModal && (
            <Modal
              small={true}
              handleModal={handleDeleteModal}
              title="Deseja mesmo deletar seu cadastro?"
            >
              <div className="delete-modal">
                <StyledButton
                  onClick={() => deleteClient()}
                  buttonStyle="alert"
                >
                  Sim
                </StyledButton>
                <StyledButton onClick={() => handleDeleteModal()}>
                  Não
                </StyledButton>
              </div>
            </Modal>
          )}
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
