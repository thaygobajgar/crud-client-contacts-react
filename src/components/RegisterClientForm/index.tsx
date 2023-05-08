import React from "react";
import { useForm } from "react-hook-form";
import { IContactUpdate } from "../../interfaces/contacts.interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateClientSchema } from "../../schemas/client.schemas";
import { iClientUpdate } from "../../interfaces/client.interfaces";
import { useAuthContext } from "../../contexts/AuthContext";
import Form from "../Form";
import { StyledText } from "../../styles/typography";
import { StyledTextInput } from "../../styles/input";
import { StyledButton } from "../../styles/buttons";

interface iRegisterClientFormProps {
  handleModal: () => void;
}

const RegisterClientForm = ({ handleModal }: iRegisterClientFormProps) => {
  const { clientUpdate, client } = useAuthContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<iClientUpdate>({
    resolver: yupResolver(updateClientSchema),
    shouldUnregister: true,
  });

  const submit = async (data: iClientUpdate) => {
    clientUpdate(data);
    reset();
    handleModal();
  };

  return (
    <Form onSubmit={handleSubmit(submit)}>
      <div>
        <StyledText tag="label" htmlFor="firstName">
          Nome:
        </StyledText>
        <input
          type="text"
          {...register("firstName", {
            value: client?.firstName || "",
          })}
          placeholder={client?.firstName}
        />
        <StyledText tag="span" fontSize={12} color="--alert-1">
          {errors.firstName?.message}
        </StyledText>
      </div>
      <div>
        <StyledText tag="label" htmlFor="lastName">
          Sobrenome:
        </StyledText>
        <input
          type="text"
          {...register("lastName", {
            value: client?.lastName || "",
          })}
          placeholder={client?.lastName}
        />
        <StyledText tag="span" fontSize={12} color="--alert-1">
          {errors.lastName?.message}
        </StyledText>
      </div>
      <div>
        <StyledText tag="label" htmlFor="email">
          Email:
        </StyledText>
        <input
          type="email"
          {...register("email", {
            value: client?.email || "",
          })}
          placeholder={client?.email}
        />
        <StyledText tag="span" fontSize={12} color="--alert-1">
          {errors.email?.message}
        </StyledText>
      </div>
      <div>
        <StyledText tag="label" htmlFor="phone">
          Celular:
        </StyledText>
        <input
          type="text"
          {...register("phone", {
            value: client?.phone || "",
          })}
          placeholder={client?.phone}
        />
        <StyledText tag="span" fontSize={12} color="--alert-1">
          {errors.phone?.message}
        </StyledText>
      </div>
      <div>
        <StyledText tag="label" htmlFor="password">
          Senha:
        </StyledText>
        <input
          type="password"
          {...(register("password"), { required: false })}
        />
        <StyledText tag="span" fontSize={10} color="--alert-1">
          {errors.password?.message}
        </StyledText>
      </div>
      <div>
        <StyledText tag="label" htmlFor="confirm-password">
          Confirme sua senha:
        </StyledText>
        <input
          type="password"
          {...(register("confirmPassword"), { required: false })}
        />
        <StyledText tag="span" fontSize={12} color="--alert-1">
          {errors.confirmPassword?.message}
        </StyledText>
      </div>
      <StyledButton type="submit">Atualizar</StyledButton>
    </Form>
  );
};

export default RegisterClientForm;
