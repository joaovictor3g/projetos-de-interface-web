import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray600};

  nav {
    height: 100%;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }

  ul {
    list-style: none;
    height: 70px;

    display: flex;
    gap: 1rem;

    li {
      height: inherit;
    }

    li a {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.white};
      font-size: 1rem;
      padding: 1rem;
      min-width: 200px;

      height: inherit;
      font-weight: bold;

      &.active {
        background-color: ${({ theme }) => theme.colors.blue300};
      }
    }
  }
`;
