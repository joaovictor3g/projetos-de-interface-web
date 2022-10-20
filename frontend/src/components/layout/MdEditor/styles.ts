import styled, { css } from "styled-components";

interface MDEditorContainerProps {
  $isInvalid?: boolean;
}

export const MDEditorContainer = styled.div<MDEditorContainerProps>`
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
        caret-color: white;
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

    ${({ $isInvalid }) =>
      $isInvalid
        ? css`
            outline: 2px solid ${({ theme }) => theme.colors.red};
          `
        : css`
            &:focus {
              outline: 2px solid ${({ theme }) => theme.colors.greenLight};
            }
          `};
  }

  .error {
    color: ${({ theme }) => theme.colors.red};
  }
`;
