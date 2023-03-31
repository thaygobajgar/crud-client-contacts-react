import { VscAccount } from "react-icons/vsc";
import { iContactWithoutClient } from "../../../interfaces/contacts.interfaces";
import { StyledText } from "../../../styles/typography";
import { StyledContactCard } from "./style";

interface iContactCardProps {
  contact: iContactWithoutClient;
}

const ContactCard = ({ contact }: iContactCardProps) => {
  return (
    <StyledContactCard>
      <VscAccount />
      <div>
        <StyledText>{contact.firstName}</StyledText>
        <StyledText>{contact.lastName}</StyledText>
        <div className="hidden-info">
          <StyledText>{contact.phone}</StyledText>
          <StyledText>{contact.email}</StyledText>
          <StyledText>{contact.createdAt}</StyledText>
        </div>
      </div>
    </StyledContactCard>
  );
};

export default ContactCard;
