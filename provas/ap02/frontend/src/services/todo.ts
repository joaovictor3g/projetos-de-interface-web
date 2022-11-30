import { api } from "./api";

export interface Todo {
  id: string;
  title: string;
  body: string;
}

export interface OriginalTodo {
  id: string;
  titulo: string;
  corpo: string;
}

export async function getAllTodos() {
  const response = await api.get<OriginalTodo[]>("/todo");
  return response.data.map<Todo>((todo) => ({
    ...todo,
    body: todo.corpo,
    title: todo.titulo,
  }));
}

export async function createTodo(newTodo: Omit<Todo, "id">) {
  const data = {
    titulo: newTodo.title,
    corpo: newTodo.body,
  };
  await api.post("/todo", data);
}
