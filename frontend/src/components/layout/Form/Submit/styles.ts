import styled from "styled-components";

export const SubmitButton = styled.button`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.green};
  border: 0;
  color: ${({ theme }) => theme.colors.white};
  max-height: 50px;

  width: max-content;
  padding: 1rem;

  font-weight: 700;
  font-size: 1rem;
  line-height: 19px;
  transition: background-color 0.2s;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.greenLight};
  }

  &:disabled {
    filter: brightness(0.7);
  }
`;
