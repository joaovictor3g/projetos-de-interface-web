import UIWMDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import { MDEditorContainer } from "./styles";

export function MdEditor() {
  const [value, setValue] = useState("");

  return (
    <MDEditorContainer>
      <UIWMDEditor
        defaultTabEnable
        placeholder="Escreva seu post aqui"
        value={value}
        onChange={(value) => setValue(value)}
        className="uiw-mdeditor"
      />
    </MDEditorContainer>
  );
}
