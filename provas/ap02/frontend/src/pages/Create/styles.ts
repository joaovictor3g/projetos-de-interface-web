import styled from "styled-components";

export const CreateContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  display: flex;
  height: calc(100vh - 70px);
  align-items: center;
  justify-content: center;

  form {
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.gray600};
    padding: 1rem;
    border-radius: 8px;

    gap: 1rem;

    button,
    input {
      width: 100%;
      height: 50px;
      border-radius: 4px;
    }

    input {
      background-color: ${({ theme }) => theme.colors.gray700};
      border: 0;

      padding: 0 1rem;
      color: ${({ theme }) => theme.colors.white};
      font-size: 1rem;

      &::placeholder {
        color: ${({ theme }) => theme.colors.white};
        opacity: 0.5;
      }
    }

    button {
      background-color: ${({ theme }) => theme.colors.blue300};
      border: none;
      color: ${({ theme }) => theme.colors.gray700};
      font-size: 1rem;
      font-weight: bold;
      line-height: 160%;
      cursor: pointer;
      transition: filter 0.2s;

      &:hover:not(:disabled) {
        filter: brightness(0.7);
      }

      &:disabled {
        cursor: not-allowed;
        opacity: 0.7;
      }
    }
  }
`;
