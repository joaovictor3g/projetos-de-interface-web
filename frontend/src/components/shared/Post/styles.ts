import styled from "styled-components";
import ReactMarkdown from "react-markdown";

export const PostContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.gray2};
  border-radius: 8px;
  padding: 1rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    time {
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 160%;
      color: ${({ theme }) => theme.colors.gray5};
    }
  }

  .content {
    margin: 30px 0;

    p {
      font-weight: 400;
      font-size: 1rem;
      line-height: 160%;
      color: ${({ theme }) => theme.colors.gray6};
    }
  }

  footer {
    border-top: 1px solid ${({ theme }) => theme.colors.gray3};
    padding: 2rem 0;

    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
`;

export const Markdown = styled(ReactMarkdown)`
  margin-top: 20px;
  font-weight: 700;
  font-size: 1rem;
  line-height: 160%;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  gap: 1rem;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.greenLight};
    font-weight: bold;
    font-size: 1rem;
    line-height: 160%;
  }

  p {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;
  }

  code {
    span {
      font-family: "Fira Code";
    }
  }
`;
