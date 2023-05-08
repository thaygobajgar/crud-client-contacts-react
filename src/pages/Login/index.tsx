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
import { StyledText } from "../../styles/typography";
import { StyledTextInput } from "../../styles/input";
import Form from "../../components/Form";

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
        <div>
          <Form onSubmit={handleSubmit(submit)}>
            <div>
              <StyledText tag="label" htmlFor="email">
                Email:
              </StyledText>
              <StyledTextInput type="email" {...register("email")} />
              <StyledText tag="span" fontSize={12} color="--alert-1">
                {errors.email?.message}
              </StyledText>
            </div>
            <StyledText tag="label" htmlFor="password">
              Senha:
            </StyledText>
            <StyledTextInput type="password" {...register("password")} />
            <StyledText tag="span" fontSize={10} color="--alert-1">
              {errors.password?.message}
            </StyledText>
            <StyledButton type="submit">Login</StyledButton>
          </Form>
          <StyledButton onClick={() => navigate("/register")}>
            Cadastrar
          </StyledButton>
        </div>
      </Main>
    </>
  );
};

export default LoginPage;
