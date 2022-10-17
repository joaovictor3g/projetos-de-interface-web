import styled from "styled-components";

export const CommentContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;
export const CommentControls = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;

  .like {
    width: max-content;
    background-color: transparent;
    border: 0;
    font-weight: 700;
    font-size: 14px;
    line-height: 1rem;
    color: ${({ theme }) => theme.colors.gray5};
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.green};
    }
  }
`;

export const CommentBox = styled.div`
  background-color: ${({ theme }) => theme.colors.gray3};
  flex: 1;
  border-radius: 9px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .user-infos {
      display: flex;
      flex-direction: column;

      strong {
        color: ${({ theme }) => theme.colors.white};
        font-weight: 700;
        font-size: 0.875rem;
        line-height: 160%;

        span {
          color: ${({ theme }) => theme.colors.gray4};
        }
      }

      time {
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 160%;
        color: ${({ theme }) => theme.colors.gray5};
      }
    }

    .delete-comment {
      border: 0;
      background: transparent;
      color: ${({ theme }) => theme.colors.gray5};
      line-height: 0;
      transition: color 0.2s;

      &:hover {
        color: ${({ theme }) => theme.colors.red};
      }
    }
  }

  .content {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 160%;
    color: ${({ theme }) => theme.colors.white};
    margin: 0;
  }
`;
