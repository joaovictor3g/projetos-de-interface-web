import { CreatePostButton, ModalContent } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import { PlusIcon } from "@radix-ui/react-icons";
import { Modal } from "@/components/shared/Modal";
import { Input, Submit } from "../Form";
import { MdEditor } from "../MdEditor";
import { api } from "@/services/api";

import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface CreatePostModalProps {
  onSuccess?: () => void;
  onError?: () => void;
}

const schema = yup.object({
  text: yup.string().required("O conteúdo do post é obrigatório"),
});

type FormInputsData = yup.InferType<typeof schema>;

export function CreatePostModal({ onSuccess, onError }: CreatePostModalProps) {
  const {
    formState: { isSubmitting },
    handleSubmit,
    control,
    reset,
  } = useForm<FormInputsData>({ resolver: yupResolver(schema) });

  async function onSubmit(data: FormInputsData) {
    try {
      await api.post("post", { ...data, likes: 0 });
      reset();
      onSuccess?.();
    } catch (error) {
      onError?.();
    }
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

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="control">
              <label htmlFor="">Escreva seu post:</label>
              <Controller
                name="text"
                control={control}
                render={({ field, formState: { errors } }) => (
                  <MdEditor
                    value={field.value}
                    onChange={field.onChange}
                    error={errors.text}
                  />
                )}
              />
            </div>
            <Submit loading={isSubmitting}>Criar novo post</Submit>
          </form>
        </ModalContent>
      </Modal>
    </Dialog.Root>
  );
}
