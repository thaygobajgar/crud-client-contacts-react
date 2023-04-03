import React, { useState } from "react";
import { IContactUpdate } from "../../../interfaces/contacts.interfaces";
import {
  registerContactSchema,
  updateContactSchema,
} from "../../../schemas/contact.schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContactContext } from "../../../contexts/ContactContext";
import { StyledButton } from "../../../styles/buttons";
import { StyledForm } from "../../Form/style";

interface iEditContactFormProps {
  handleModal: () => void;
}

const EditContactForm = ({ handleModal }: iEditContactFormProps) => {
  const [tryDelete, setTryDelete] = useState<boolean>(false);
  const { contactUpdate, editContact, contactDelete } = useContactContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IContactUpdate>({
    resolver: yupResolver(updateContactSchema),
  });

  const submit = async (data: IContactUpdate) => {
    contactUpdate(data, editContact.id);
    reset();
    handleModal();
  };

  const handleDeleteModal = () => {};

  const handleDelete = () => {
    contactDelete(editContact.id);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <div>
        <label htmlFor="firstName">Nome:</label>
        <input {...register("firstName")} placeholder={editContact.firstName} />
        <span>{errors.firstName?.message}</span>
      </div>
      <div>
        <label htmlFor="lastName">Sobrenome:</label>
        <input
          {...register("lastName")}
          placeholder={
            editContact.lastName
              ? editContact.lastName
              : "Defina um sobrenome..."
          }
        />
        <span>{errors.lastName?.message}</span>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input {...register("email")} placeholder={editContact.email} />
        <span>{errors.email?.message}</span>
      </div>
      <div>
        <label htmlFor="phone">Celular:</label>
        <input {...register("phone")} placeholder={editContact.phone} />
        <span>{errors.phone?.message}</span>
      </div>
      <StyledButton type="submit">Salvar alterações</StyledButton>
      <StyledButton
        className={tryDelete ? "delete" : ""}
        onClick={(e) => {
          e.preventDefault();
          tryDelete && handleDelete();
          setTryDelete(!tryDelete);
        }}
      >
        {tryDelete ? "Clique novamente para confirmar" : "Deletar"}
      </StyledButton>
    </StyledForm>
  );
};

export default EditContactForm;
