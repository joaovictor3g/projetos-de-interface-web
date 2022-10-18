import styled, { css } from "styled-components";

interface InputContainerProps {
  $error?: boolean;
}

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-weight: 700;
    font-size: 1rem;
    line-height: 160%;
    color: ${({ theme }) => theme.colors.gray7};
  }

  input {
    min-width: 200px;
    background: ${({ theme }) => theme.colors.gray1};
    border: none;
    outline: none;
    border-radius: 8px;
    height: 50px;
    padding: 1rem;

    font-weight: 400;
    font-size: 1rem;
    line-height: 140%;
    color: ${({ theme }) => theme.colors.gray6};

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray4};
    }

    ${({ $error }) =>
      $error
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
