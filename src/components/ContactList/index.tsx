import { useState } from "react";
import { iContactWithoutClient } from "../../interfaces/contacts.interfaces";
import Modal from "../Modal";
import ContactCard from "./ContactCard";
import { StyledContactList } from "./style";
import RegisterContactForm from "./RegisterContactForm";
import { StyledButton } from "../../styles/buttons";

interface iContactListProps {
  contacts: iContactWithoutClient[];
}
const ContactList = ({ contacts }: iContactListProps) => {
  const [isModal, setIsModal] = useState(true);
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
        <Modal handleModal={handleModal} title="Registrar novo contato:">
          {modalType === "registerContact" ? (
            <RegisterContactForm handleModal={handleModal} />
          ) : (
            <h1>oi</h1>
          )}
        </Modal>
      )}
      {contacts &&
        contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      <StyledButton
        onClick={() => {
          handleModal();
          handleModalType("registerContact");
        }}
      >
        Adicionar contato
      </StyledButton>
    </StyledContactList>
  );
};

export default ContactList;
