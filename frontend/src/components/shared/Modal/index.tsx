import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import { DialogOverlay } from "./styles";

interface ModalProps extends Dialog.DialogContentProps {
  children: ReactNode;
}

export function Modal({ children, ...props }: ModalProps) {
  return (
    <Dialog.Portal>
      <DialogOverlay />
      <Dialog.Content {...props}>{children}</Dialog.Content>
    </Dialog.Portal>
  );
}
