import { ButtonHTMLAttributes } from "react";
import { SubmitButton } from "./styles";

export function Submit({ ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <SubmitButton {...props} type="submit" />;
}
