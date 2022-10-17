import UIWMDEditor from "@uiw/react-md-editor";
import { MDEditorContainer } from "./styles";

interface MdEditorProps {
  value: string;
  onChange: (value?: string) => void;
}

export function MdEditor({ onChange, value }: MdEditorProps) {

  return (
    <MDEditorContainer>
      <UIWMDEditor
        defaultTabEnable
        placeholder="Escreva seu post aqui"
        value={value}
        onChange={onChange}
        className="uiw-mdeditor"
      />
    </MDEditorContainer>
  );
}
