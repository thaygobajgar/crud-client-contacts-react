import { VscAccount } from "react-icons/vsc";
import { iContactWithoutClient } from "../../../interfaces/contacts.interfaces";
import { StyledText } from "../../../styles/typography";
import { StyledContactCard } from "./style";
import { formatPhoneNumber } from "../../../utils/formatPhone.utils";

interface iContactCardProps {
  contact: iContactWithoutClient;
  onClick?: (event: any) => void;
}

const ContactCard = ({ contact, onClick }: iContactCardProps) => {
  return (
    <StyledContactCard onClick={onClick}>
      <VscAccount size={20} />
      <div>
        <StyledText>
          {contact.firstName} {contact.lastName}
        </StyledText>
        <div className="hidden-info">
          <StyledText>{formatPhoneNumber(contact.phone)}</StyledText>
          <StyledText>{contact.email}</StyledText>
          <StyledText>
            {new Date(contact.createdAt).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </StyledText>
        </div>
      </div>
    </StyledContactCard>
  );
};

export default ContactCard;
