import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import Header from "../../components/Header";
import Main from "../../components/Main";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../../contexts/AuthContext";
import {
  loginSchema,
  registerClientSchema,
} from "../../schemas/client.schemas";
import { StyledButton } from "../../styles/buttons";

const LoginPage = () => {
  const { clientLogin } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const submit = async (data) => {
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
      </Main>
    </>
  );
};

export default LoginPage;
