import { CreatePostButton, ModalContent } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import { PlusIcon } from "@radix-ui/react-icons";
import { Modal } from "@/components/shared/Modal";
import { Input, Submit } from "../Form";
import { MdEditor } from "../MdEditor";
import { FormEvent, useState } from "react";
// import { api } from "@/services/api";
import { useNavigate } from "react-router-dom";

export function CreatePostModal() {
  const [content, setContent] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      text: content,
      likes: 0,
    };

    // try {
    //   await api.post("post", data);
    // } catch (error) {}

    setModalOpen(false);
  }

  return (
    <Dialog.Root open={modalOpen} onOpenChange={(open) => setModalOpen(open)}>
      <Dialog.Trigger asChild>
        <CreatePostButton>
          <PlusIcon width={24} height={24} />
          <span>Criar novo post</span>
        </CreatePostButton>
      </Dialog.Trigger>

      <Modal>
        <ModalContent>
          <h1>Criar um novo post</h1>

          <form onSubmit={handleSubmit}>
            <Input label="Assunto do post:" placeholder="Uma breve descrição" />
            <div className="control">
              <label htmlFor="">Escreva seu post:</label>
              <MdEditor
                value={content}
                onChange={(value) => setContent(value as string)}
              />
            </div>
            <Submit>Criar novo post</Submit>
          </form>
        </ModalContent>
      </Modal>
    </Dialog.Root>
  );
}
