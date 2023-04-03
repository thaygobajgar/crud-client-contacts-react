import * as yup from "yup";
import { registerClientSchema } from "./client.schemas";

const registerContactSchema = yup
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
  })
  .required();

const updateContactSchema = yup
  .object({
    firstName: yup.string(),
    lastName: yup.string(),
    email: yup.string().email("Precisa ser um email válido"),
    phone: yup.string().notRequired(),
  })
  .required();

export { registerContactSchema, updateContactSchema };
