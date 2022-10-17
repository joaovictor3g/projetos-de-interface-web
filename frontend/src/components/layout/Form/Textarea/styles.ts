import styled from "styled-components";

export const TextareaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-weight: 700;
    font-size: 1rem;
    line-height: 160%;
    color: ${({ theme }) => theme.colors.gray7};
  }

  textarea {
    resize: vertical;
    min-width: 200px;
    background: ${({ theme }) => theme.colors.gray1};
    border: 0;
    border-radius: 8px;
    height: 50px;
    padding: 1rem;
    min-height: 100px;

    font-weight: 400;
    font-size: 1rem;
    line-height: 140%;
    color: ${({ theme }) => theme.colors.gray6};

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray4};
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.greenLight};
      outline: 1px solid ${({ theme }) => theme.colors.greenLight};
    }
  }
`;
