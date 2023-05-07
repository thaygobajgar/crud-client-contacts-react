import React from "react";
import { StyledForm } from "./style";

interface iFormProps {
  children?: React.ReactNode;
  onSubmit?: () => void;
}
const Form = ({ children, onSubmit }: iFormProps) => {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
};

export default Form;
