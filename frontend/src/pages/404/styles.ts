import styled from "styled-components";
import bg404 from "@/assets/_bg404.svg";

export const NotFoundContainer = styled.div`
  ${({ theme }) => theme.customs.wrapper};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: ${({ theme }) => ` calc(100vh - ${theme.customs.header.height})`};
  background-image: url(${bg404});
  background-repeat: no-repeat;
  background-position: center;
  gap: 1rem;

  h1 {
    color: ${({ theme }) => theme.colors.white};
  }

  a {
    background-color: ${({ theme }) => theme.colors.green};
    padding: 1rem;
    text-decoration: none;
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 700;
    font-size: 1rem;
    line-height: 120%;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.7);
    }
  }
`;
