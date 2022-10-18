import styled from "styled-components";

export const UserRegistrationContainer = styled.section`
  ${({ theme }) => theme.customs.wrapper};
  min-height: ${({ theme }) => ` calc(100vh - ${theme.customs.header.height})`};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserRegistrationForm = styled.form`
  background-color: ${({ theme }) => theme.colors.gray2};
  max-width: 500px;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 2rem;

  border-radius: 8px;

  h1 {
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
  }

  a.user-registration-link {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: flex-end;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.green};
    font-weight: 700;
    overflow: hidden;
    transform: translateX(28px);
    transition: transform 0.2s;
    svg {
      visibility: hidden;
    }

    &:hover {
      transform: translateX(0);
      svg {
        visibility: visible;
      }
    }
  }

  button {
    width: 100%;
  }
`;
