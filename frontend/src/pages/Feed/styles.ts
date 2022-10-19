import styled from "styled-components";

export const FeedContainer = styled.section`
  ${({ theme }) => theme.customs.wrapper};
  display: grid;
  grid-template-columns: 300px 1fr;
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

  .empty-posts {
    min-height: ${({ theme }) =>
      `calc(100vh - ${theme.customs.header.height})`};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    strong,
    span {
      color: ${({ theme }) => theme.colors.white};
    }

    strong {
      font-size: 2rem;
    }

    & > span {
      font-size: 1.5rem;
    }

    button {
      width: max-content;
    }
  }
`;
