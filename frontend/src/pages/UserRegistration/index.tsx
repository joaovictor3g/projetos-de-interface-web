import { Input, Submit } from "@/components/layout/Form";
import { api } from "@/services/api";
import { FormEvent, useState } from "react";
import { UserRegistrationContainer, UserRegistrationForm } from "./styles";

export function UserRegistration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      name,
      email,
      password,
    };

    try {
      await api.post("user", data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <UserRegistrationContainer>
      <UserRegistrationForm onSubmit={handleSubmit}>
        <h1>Criar novo usuário</h1>
        <Input
          placeholder="Digite seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Submit>Criar novo usuário</Submit>
      </UserRegistrationForm>
    </UserRegistrationContainer>
  );
}
