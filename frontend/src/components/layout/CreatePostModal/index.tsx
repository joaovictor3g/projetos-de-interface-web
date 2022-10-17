import { CreatePostButton, ModalContent } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import { PlusIcon } from "@radix-ui/react-icons";
import { Modal } from "@/components/shared/Modal";
import { Textarea, Input, Submit } from "../Form";
import { MdEditor } from "../MdEditor";

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
            <div className="control">
              <label htmlFor="">Escreva seu post:</label>
              <MdEditor />
            </div>
            <Submit>Criar novo post</Submit>
          </form>
        </ModalContent>
      </Modal>
    </Dialog.Root>
  );
}
