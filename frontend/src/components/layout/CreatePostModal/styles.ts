import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const CreatePostContainer = styled.div`
  ${({ theme }) => theme.customs.wrapper};
  position: relative;
`;

export const CreatePostButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  background-color: ${({ theme }) => theme.colors.green};

  position: fixed;
  bottom: 1rem;
  border: 0;
  transition: width 0.3s, border-radius 0.3s;

  display: flex;
  align-items: center;
  justify-content: center;
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
