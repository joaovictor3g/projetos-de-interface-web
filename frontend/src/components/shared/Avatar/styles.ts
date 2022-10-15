import styled from "styled-components";

export const AvatarContainer = styled.div`
  .image-wrapper {
    padding: 5px;
    border: 2px solid ${({ theme }) => theme.colors.greenLight};
    width: max-content;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.gray1};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .user-infos {
    display: flex;
    flex-direction: column;

    strong {
      font-weight: 700;
      font-size: 1rem;
      line-height: 160%;
      color: ${({ theme }) => theme.colors.white};
    }

    span {
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 160%;
      color: ${({ theme }) => theme.colors.gray5};
    }
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  .user-infos {
    text-align: center;
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;
