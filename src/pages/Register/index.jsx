import React, { useContext } from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import { useForm } from "react-hook-form";
import { iClient } from "../../database";
import { StyledButton } from "../../styles/buttons";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerClientSchema } from "../../schemas/client.schemas";
import { AuthContext } from "../../contexts/AuthContext";

const RegisterPage = () => {
  const { clientRegister } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerClientSchema),
  });

  const submit = async (data) => {
    clientRegister(data);
    reset();
  };

  return (
    <>
      <Header />
      <Main>
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
          <div>
            <label htmlFor="password">Senha:</label>
            <input {...register("password")} />
            <span>{errors.password?.message}</span>
          </div>
          <div>
            <label htmlFor="confirm-password">Confirme sua senha:</label>
            <input {...register("confirmPassword")} />
            <span>{errors.confirmPassword?.message}</span>
          </div>
          <StyledButton type="submit">Cadastrar</StyledButton>
        </form>
      </Main>
    </>
  );
};

export default RegisterPage;
