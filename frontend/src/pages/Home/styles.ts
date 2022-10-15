import { theme } from "@/styles";
import styled from "styled-components";

export const HomeContainer = styled.section`
  ${({ theme }) => theme.customs.wrapper};
  min-height: calc(100vh - 100px);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeForm = styled.form`
  background-color: ${({ theme }) => theme.colors.gray2};
  max-width: 500px;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 2rem;

  border-radius: 8px;

  input {
    min-width: 200px;
    background: ${({ theme }) => theme.colors.gray1};
    border: 0;
    border-radius: 8px;
    height: 50px;
    padding: 0 1rem;

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

  button {
    min-width: 200px;
    background-color: ${({ theme }) => theme.colors.green};
    border: 0;
    height: 50px;
    border-radius: 8px;

    color: ${({ theme }) => theme.colors.white};
    font-weight: 700;
    font-size: 1rem;
    line-height: 19px;
  }
`;
