import { Todo } from "../../services/todo";
import { TodoContainer } from "./styles";

type ItemDetailsProps = Omit<Todo, "id">;

export function ItemDetails({ body, title }: ItemDetailsProps) {
  return (
    <TodoContainer>
      <h1>{title}</h1>
      <p>{body}</p>
    </TodoContainer>
  );
}
