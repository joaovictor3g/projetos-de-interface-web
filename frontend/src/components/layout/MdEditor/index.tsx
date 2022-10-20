import UIWMDEditor from "@uiw/react-md-editor";
import { FieldError } from "react-hook-form";
import { MDEditorContainer } from "./styles";

interface MdEditorProps {
  value: string;
  onChange: (value?: string) => void;
  error?: FieldError;
}

export function MdEditor({ error, onChange, value }: MdEditorProps) {
  return (
    <MDEditorContainer $isInvalid={!!error}>
      <UIWMDEditor
        defaultTabEnable
        placeholder="Escreva seu post aqui"
        value={value}
        onChange={onChange}
        className="uiw-mdeditor"
        fullscreen={false}
      />
      {!!error && <span className="error">{error.message}</span>}
    </MDEditorContainer>
  );
}
