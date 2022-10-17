import { CreatePostContainer, CreatePostButton, DialogContent } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import { PlusIcon } from "@radix-ui/react-icons";
import { Modal } from "@/components/shared/Modal";
import { Textarea } from "../Form/Textarea";
import { Input } from "../Form/Input";

export function CreatePostModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CreatePostButton>
          <PlusIcon color="#ffffff" width={24} height={24} />
        </CreatePostButton>
      </Dialog.Trigger>

      <Modal>
        <DialogContent>
          <h1>Criar um novo post</h1>

          <form>
            <Input label="Assunto do post:" placeholder="Uma breve descrição" />
            <Textarea
              label="Escreva seu post:"
              placeholder="Escreva o post aqui"
            />
          </form>
        </DialogContent>
      </Modal>
    </Dialog.Root>
  );
}
