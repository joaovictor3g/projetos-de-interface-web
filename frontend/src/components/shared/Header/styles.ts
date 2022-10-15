import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.gray2};
`;

export const HeaderWrapper = styled.div`
  ${({ theme }) => theme.customs.wrapper};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    object-fit: contain;
  }
`;
