import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: ${({ theme }) => theme.customs.header.height};
  background-color: ${({ theme }) => theme.colors.gray2};
`;

export const HeaderFixedWrapper = styled(HeaderContainer)`
  position: fixed;
`;

export const HeaderWrapper = styled.div`
  ${({ theme }) => theme.customs.wrapper};
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  padding: 0.5rem 1rem;

  img {
    height: 50px;
    object-fit: contain;
  }
`;
