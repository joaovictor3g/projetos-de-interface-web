import styled from "styled-components";

export const MDEditorContainer = styled.div`
  .uiw-mdeditor {
    background-color: ${({ theme }) => theme.colors.gray1};
    border: 0;
    outline: none;

    .w-md-editor-toolbar {
      background-color: inherit;

      button {
        color: ${({ theme }) => theme.colors.white};
      }

      textarea {
        color: ${({ theme }) => theme.colors.white};
      }
    }

    .wmde-markdown-color {
      background-color: inherit;
      color: white;
      font-size: 1rem;
    }

    .w-md-editor-preview {
      background-color: inherit;

      .wmde-markdown wmde-markdown-color {
        background-color: ${({ theme }) => theme.colors.gray1};
      }
    }

    &:focus-within {
      outline: 1px solid ${({ theme }) => theme.colors.green};

      .w-md-editor-toolbar {
        background-color: inherit;

        button {
          color: ${({ theme }) => theme.colors.green};
        }
      }
    }
  }
`;
