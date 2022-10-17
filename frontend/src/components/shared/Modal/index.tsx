import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import { DialogOverlay, DialogPortal } from "./styles";

interface ModalProps {
  children: ReactNode;
}

export function Modal({ children }: ModalProps) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <Dialog.Content>{children}</Dialog.Content>
    </DialogPortal>
  );
}
