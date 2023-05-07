import * as yup from "yup";

const loginSchema = yup
  .object({
    email: yup
      .string()
      .email("Precisa ser um email válido")
      .required("Email é obrigatório"),
    password: yup.string().required("Senha obrigatoria"),
  })
  .required();

const registerClientSchema = yup
  .object({
    firstName: yup
      .string()
      .min(3, "Não pode ter menos do que 3 letras")
      .max(50, "Não pode ter mais do que 50 letras")
      .required("Nome é obrigatório"),
    lastName: yup
      .string()
      .min(3, "Não pode ter menos do que 3 letras")
      .max(50, "Não pode ter mais do que 50 letras")
      .required("Sobrenome é obrigatório"),
    email: yup
      .string()
      .max(127, "Não pode ter mais do que 127 letras")
      .email("Precisa ser um email válido")
      .required("Email é obrigatório"),
    phone: yup
      .string()
      .max(14, "Deve conter no maximo 14 digitos")
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

const updateClientSchema = yup
  .object({
    firstName: yup
      .string()
      .min(3, "Não pode ter menos do que 3 letras")
      .max(50, "Não pode ter mais do que 50 letras"),
    lastName: yup
      .string()
      .min(3, "Não pode ter menos do que 3 letras")
      .max(50, "Não pode ter mais do que 50 letras"),
    email: yup
      .string()
      .max(127, "Não pode ter mais do que 127 letras")
      .email("Precisa ser um email válido"),
    phone: yup
      .string()
      .max(14, "Deve conter no maximo 14 digitos")
      .matches(/.{14}/, "Deve conter ao menos 14 dígitos"),
    password: yup
      .string()
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

export { registerClientSchema, loginSchema, updateClientSchema };
