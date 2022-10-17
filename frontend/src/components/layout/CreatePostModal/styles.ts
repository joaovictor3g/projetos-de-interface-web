import styled from "styled-components";

export const CreatePostContainer = styled.div`
  ${({ theme }) => theme.customs.wrapper};
`;

export const CreatePostButton = styled.button`
  width: 100%;
  border: 0;
  background-color: ${({ theme }) => theme.colors.green};
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 1rem;
  line-height: 19px;

  &:hover {
    filter: brightness(0.7);
  }
`;

export const ModalContent = styled.div`
  max-width: 500px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray2};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  padding: 1rem;

  h1 {
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;
