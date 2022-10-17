import { CreatePostButton, ModalContent } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import { PlusIcon } from "@radix-ui/react-icons";
import { Modal } from "@/components/shared/Modal";
import { Textarea, Input, Submit } from "../Form";
import { MdEditor } from "../MdEditor";
import { FormEvent, useState } from "react";
import { api } from "@/services/api";

export function CreatePostModal() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      text: content,
      likes: 0,
    };

    try {
      await api.post("post", data);
    } catch (error) {}
  }

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
