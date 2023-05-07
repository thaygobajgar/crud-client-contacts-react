import Header from "../../components/Header";
import Main from "../../components/Main";
import { useForm } from "react-hook-form";
import { StyledButton } from "../../styles/buttons";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerClientSchema } from "../../schemas/client.schemas";
import { useAuthContext } from "../../contexts/AuthContext";
import { iClientRegister } from "../../interfaces/client.interfaces";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form";
import { StyledTextInput } from "../../styles/input";
import { StyledText } from "../../styles/typography";

export const RegisterPage = () => {
  const { clientRegister } = useAuthContext();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<iClientRegister>({
    resolver: yupResolver(registerClientSchema),
  });

  const submit = async (data: iClientRegister) => {
    clientRegister(data);
    reset();
  };

  return (
    <>
      <Header />
      <Main>
        <div>
          <Form onSubmit={handleSubmit(submit)}>
            <div>
              <StyledText tag="label" htmlFor="firstName">
                Nome:
              </StyledText>
              <StyledTextInput type="text" {...register("firstName")} />
              <StyledText tag="span" fontSize={12} color="--alert-1">
                {errors.firstName?.message}
              </StyledText>
            </div>
            <div>
              <StyledText tag="label" htmlFor="lastName">
                Sobrenome:
              </StyledText>
              <StyledTextInput type="text" {...register("lastName")} />
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
              <StyledTextInput type="text" {...register("phone")} />
              <StyledText tag="span" fontSize={12} color="--alert-1">
                {errors.phone?.message}
              </StyledText>
            </div>
            <div>
              <StyledText tag="label" htmlFor="password">
                Senha:
              </StyledText>
              <StyledTextInput type="password" {...register("password")} />
              <StyledText tag="span" fontSize={10} color="--alert-1">
                {errors.password?.message}
              </StyledText>
            </div>
            <div>
              <StyledText tag="label" htmlFor="confirm-password">
                Confirme sua senha:
              </StyledText>
              <StyledTextInput
                type="password"
                {...register("confirmPassword")}
              />
              <StyledText tag="span" fontSize={12} color="--alert-1">
                {errors.confirmPassword?.message}
              </StyledText>
            </div>
            <StyledButton type="submit">Cadastrar</StyledButton>
          </Form>
          <StyledButton onClick={() => navigate("/")}>
            Já possuí registro?
          </StyledButton>
        </div>
      </Main>
    </>
  );
};

export default RegisterPage;
