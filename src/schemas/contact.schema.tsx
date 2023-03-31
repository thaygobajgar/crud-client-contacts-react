import * as yup from "yup";

const registerContactSchema = yup.object({
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
});

export { registerContactSchema };
