import * as yup from "yup";

const loginSchema = yup
  .object({
    email: yup
      .string()
      .email("Precisa ser um email válido")
      .required("Email é obrigatório"),
    password: yup.string().required("Senha obrigatoria"),
    // .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    // .matches(/([a-z])/, "Deve conter ao menos 1 letra minúscula")
    // .matches(/(\d)/, "Deve conter ao menos 1 número")
    // .matches(/(\W)|_/, "Deve conter ao menos 1 caracter especial")
    // .matches(/.{8,}/, "Deve conter ao menos 8 caracteres"),
  })
  .required();

const registerClientSchema = yup
  .object({
    firstName: yup.string().required("Nome é obrigatório"),
    lastName: yup.string().required("Sobrenome é obrigatório"),
    email: yup
      .string()
      .email("Precisa ser um email válido")
      .required("Email é obrigatório"),
    phone: yup
      .string()
      .required("Celular é obrigatório")
      .matches(/.{14}/, "Deve conter ao menos 14 dígitos"),
    password: yup
      .string()
      .required("Senha obrigatoria")
      .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
      .matches(/([a-z])/, "Deve conter ao menos 1 letra minúscula")
      .matches(/(\d)/, "Deve conter ao menos 1 número")
      .matches(/(\W)|_/, "Deve conter ao menos 1 caracter especial")
      .matches(/.{8,}/, "Deve conter ao menos 8 caracteres"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Confimação sua senha"),
  })
  .required();

export { registerClientSchema, loginSchema };
