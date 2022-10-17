import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const DialogOverlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  inset: 0;
`;
