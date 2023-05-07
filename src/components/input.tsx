import React from "react";
import { StyledTextArea, StyledTextInput } from "../styles/input";

interface iInputProps {
  register: () => void | object;
  className?: string;
  type?: string | undefined;
  placeholder?: string | undefined;
  helperText?: any;
  label?: string;
  disabled?: boolean | undefined;
  value?: string | undefined;
}

const Input = ({
  register,
  className,
  type,
  placeholder,
  helperText,
  label,
  disabled,
  value,
}: iInputProps) => {
  return (
    <>
      {!type && (
        <StyledTextInput
          {...register()}
          type="text"
          placeholder={placeholder && placeholder}
          value={value ? value : undefined}
          disabled={disabled && disabled}
        />
      )}
      {type && type !== "textarea" && (
        <StyledTextInput
          {...register()}
          type={type}
          placeholder={placeholder && placeholder}
          value={value ? value : undefined}
          disabled={disabled && disabled}
        />
      )}
      {type === "textarea" && (
        <StyledTextArea
          {...register()}
          placeholder={placeholder && placeholder}
          value={value ? value : undefined}
          disabled={disabled && disabled}
        />
      )}
    </>
  );
};

export default Input;
