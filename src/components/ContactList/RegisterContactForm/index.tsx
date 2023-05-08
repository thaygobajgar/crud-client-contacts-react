import React from "react";
import { IContactRegister } from "../../../interfaces/contacts.interfaces";
import { registerContactSchema } from "../../../schemas/contact.schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContactContext } from "../../../contexts/ContactContext";
import { StyledButton } from "../../../styles/buttons";
import { StyledForm } from "../../Form/style";
import Form from "../../Form";
import { StyledText } from "../../../styles/typography";
import { StyledTextInput } from "../../../styles/input";

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
    <Form onSubmit={handleSubmit(submit)}>
      <div>
        <StyledText tag="label" htmlFor="firstName">
          Nome:
        </StyledText>
        <StyledTextInput {...register("firstName")} />
        <StyledText tag="span" fontSize={12} color="--alert-1">
          {errors.firstName?.message}
        </StyledText>
      </div>
      <div>
        <StyledText tag="label" htmlFor="lastName">
          Sobrenome:
        </StyledText>
        <StyledTextInput {...register("lastName")} />
        <StyledText tag="span" fontSize={12} color="--alert-1">
          {errors.lastName?.message}
        </StyledText>
      </div>
      <div>
        <StyledText tag="label" htmlFor="email">
          Email:
        </StyledText>
        <StyledTextInput type="email" {...register("email")} />
        <StyledText tag="span" fontSize={12} color="--alert-1">
          {errors.email?.message}
        </StyledText>
      </div>
      <div>
        <StyledText tag="label" htmlFor="phone">
          Celular:
        </StyledText>
        <StyledTextInput {...register("phone")} />
        <StyledText tag="span" fontSize={12} color="--alert-1">
          {errors.phone?.message}
        </StyledText>
      </div>
      <StyledButton type="submit">Cadastrar novo contato</StyledButton>
    </Form>
  );
};

export default RegisterContactForm;
