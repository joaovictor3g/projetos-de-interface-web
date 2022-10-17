import { InputHTMLAttributes } from "react";
import { InputContainer } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, ...rest }:InputProps) {
  return (
    <InputContainer>
      {label && <label>{label}</label>}
      <input {...rest} />
    </InputContainer>
  );
}
