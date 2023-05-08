import { useState } from "react";
import { iContactWithoutClient } from "../../interfaces/contacts.interfaces";
import Modal from "../Modal";
import ContactCard from "./ContactCard";
import { StyledContactList } from "./style";
import RegisterContactForm from "./RegisterContactForm";
import { StyledButton } from "../../styles/buttons";
import EditContactForm from "./EditContactForm";
import { useContactContext } from "../../contexts/ContactContext";
import { IoMdPersonAdd } from "react-icons/io";
interface iContactListProps {
  contacts: iContactWithoutClient[];
}
const ContactList = ({ contacts }: iContactListProps) => {
  const { setEditContact } = useContactContext();
  const [isModal, setIsModal] = useState(false);
  const [modalType, setModalType] = useState<string | null>(null);
  const handleModal = () => {
    setIsModal(!isModal);
  };

  const handleModalType = (type: string) => {
    setModalType(type);
  };

  return (
    <StyledContactList>
      {isModal && (
        <Modal
          handleModal={handleModal}
          title={
            modalType === "registerContact"
              ? "Registrar novo contato:"
              : "Editar contato:"
          }
        >
          {modalType === "registerContact" ? (
            <RegisterContactForm handleModal={handleModal} />
          ) : (
            <EditContactForm handleModal={handleModal} />
          )}
        </Modal>
      )}
      <li>
        <StyledButton
          onClick={() => {
            handleModal();
            handleModalType("registerContact");
          }}
        >
          <IoMdPersonAdd size={20} />
          Adicionar contato
        </StyledButton>
      </li>
      {contacts &&
        contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            contact={contact}
            onClick={(e) => {
              setEditContact(contact);
              handleModalType("editContact");
              handleModal();
            }}
          />
        ))}
    </StyledContactList>
  );
};

export default ContactList;
