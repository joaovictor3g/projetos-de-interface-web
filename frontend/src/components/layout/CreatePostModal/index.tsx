import { CreatePostButton, ModalContent } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import { PlusIcon } from "@radix-ui/react-icons";
import { Modal } from "@/components/shared/Modal";
import { Textarea, Input, Submit } from "../Form";

export function CreatePostModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CreatePostButton>
          <PlusIcon width={24} height={24} />
          <span>Criar novo post</span>
        </CreatePostButton>
      </Dialog.Trigger>

      <Modal>
        <ModalContent>
          <h1>Criar um novo post</h1>

          <form>
            <Input label="Assunto do post:" placeholder="Uma breve descrição" />
            <Textarea
              label="Escreva seu post:"
              placeholder="Escreva o post aqui"
            />
            <Submit>Criar novo post</Submit>
          </form>
        </ModalContent>
      </Modal>
    </Dialog.Root>
  );
}
