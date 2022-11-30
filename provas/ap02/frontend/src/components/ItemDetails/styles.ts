import styled from "styled-components";

export const TodoContainer = styled.div`
  width: 100%;
  padding: 1rem;

  background-color: ${({ theme }) => theme.colors.gray600};
  border-radius: 4px;

  margin-top: 20px;

  p {
    font-size: 1rem;
    line-height: 160%;
  }
`;
