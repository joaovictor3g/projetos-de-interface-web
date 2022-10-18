import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from "react";
import { InputContainer } from "./styles";

import { FieldError } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { error, label, ...rest },
  ref
) => {
  return (
    <InputContainer $error={!!error}>
      {label && <label htmlFor={label}>{label}</label>}
      <input {...rest} id={label} ref={ref} />
      {!!error && <p className="error">{error.message}</p>}
    </InputContainer>
  );
};

export const Input = forwardRef(InputBase);
