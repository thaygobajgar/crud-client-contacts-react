import React from "react";
import { IContactRegister } from "../../../interfaces/contacts.interfaces";
import { registerContactSchema } from "../../../schemas/contact.schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContactContext } from "../../../contexts/ContactContext";
import { StyledButton } from "../../../styles/buttons";

interface iRegisterContactFormProps {
  handleModal: () => void;
}

const RegisterContactForm = ({ handleModal }: iRegisterContactFormProps) => {
  const { contactRegister } = useContactContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IContactRegister>({
    resolver: yupResolver(registerContactSchema),
  });

  const submit = async (data: IContactRegister) => {
    contactRegister(data);
    reset();
    handleModal();
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <label htmlFor="firstName">Nome:</label>
        <input {...register("firstName")} />
        <span>{errors.firstName?.message}</span>
      </div>
      <div>
        <label htmlFor="lastName">Sobrenome:</label>
        <input {...register("lastName")} />
        <span>{errors.lastName?.message}</span>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input {...register("email")} />
        <span>{errors.email?.message}</span>
      </div>
      <div>
        <label htmlFor="phone">Celular:</label>
        <input {...register("phone")} />
        <span>{errors.phone?.message}</span>
      </div>
      <StyledButton type="submit">Cadastrar novo contato</StyledButton>
    </form>
  );
};

export default RegisterContactForm;
