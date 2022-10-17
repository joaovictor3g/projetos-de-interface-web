import { TextareaHTMLAttributes } from "react";
import { TextareaContainer } from "./styles";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export function Textarea({ label, ...rest }: TextareaProps) {
  return (
    <TextareaContainer>
      {label && <label>{label}</label>}
      <textarea {...rest} />
    </TextareaContainer>
  );
}
