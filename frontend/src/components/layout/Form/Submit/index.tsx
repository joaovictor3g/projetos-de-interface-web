import { LoaderIcon } from "@/icons/Loader";
import { ButtonHTMLAttributes } from "react";
import { SubmitButton } from "./styles";

interface SubmitProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export function Submit({ loading, ...props }: SubmitProps) {
  return (
    <SubmitButton {...props} type="submit" disabled={loading}>
      {loading && <LoaderIcon />}
      {props.children}
    </SubmitButton>
  );
}
