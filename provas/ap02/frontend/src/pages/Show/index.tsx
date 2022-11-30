import { useEffect, useState } from "react";
import { ItemDetails } from "../../components/ItemDetails";
import { getAllTodos, Todo } from "../../services/todo";
import { ShowContainer } from "./styles";

export function Show() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    getAllTodos().then((data) => setTodos(data));
  }, []);

  return (
    <ShowContainer>
      {todos.map((todo) => (
        <ItemDetails key={todo.id} {...todo} />
      ))}
    </ShowContainer>
  );
}
