import { CreateContainer } from "./styles";
import { useForm } from "react-hook-form";
import { createTodo, Todo } from "../../services/todo";
import { useNavigate } from "react-router-dom";

export function Create() {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<Omit<Todo, "id">>();

  const navigate = useNavigate();

  async function onSubmit(data: Omit<Todo, "id">) {
    try {
      await createTodo(data);
      navigate("/mostrar");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <CreateContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Criar novo TODO</h1>
        <input placeholder="Digite o título do TODO" {...register("title")} />
        <input placeholder="Digite o corpo do TODO" {...register("body")} />

        <button type="submit" disabled={isSubmitting}>
          Enviar
        </button>
      </form>
    </CreateContainer>
  );
}
