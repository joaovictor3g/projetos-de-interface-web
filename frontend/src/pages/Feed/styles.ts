import styled from "styled-components";

export const FeedContainer = styled.section`
  ${({ theme }) => theme.customs.wrapper};
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  .posts-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .load-more {
    text-align: center;
    color: ${({ theme }) => theme.colors.green};
    font-weight: bold;
  }
`;
