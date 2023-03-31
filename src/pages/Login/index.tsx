import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import Header from "../../components/Header";
import Main from "../../components/Main";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuthContext } from "../../contexts/AuthContext";
import { loginSchema } from "../../schemas/client.schemas";
import { StyledButton } from "../../styles/buttons";
import {
  iClientLogin,
  iClientRegister,
} from "../../interfaces/client.interfaces";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { clientLogin } = useAuthContext();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<iClientRegister>({
    resolver: yupResolver(loginSchema),
  });

  const submit = async (data: iClientLogin) => {
    clientLogin(data);
    reset();
  };
  return (
    <>
      <Header />
      <Main>
        <form onSubmit={handleSubmit(submit)}>
          <div>
            <label htmlFor="email">Email:</label>
            <input {...register("email")} />
            <span>{errors.email?.message}</span>
          </div>
          <div>
            <label htmlFor="password">Senha:</label>
            <input {...register("password")} />
            <span>{errors.password?.message}</span>
          </div>
          <StyledButton type="submit">Login</StyledButton>
        </form>
        <StyledButton onClick={() => navigate("/register")}>
          Cadastrar
        </StyledButton>
      </Main>
    </>
  );
};

export default LoginPage;
