import { api } from "@/services/api";
import { setToken } from "@/utils/localStorage";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HomeContainer, HomeForm } from "./styles";

export function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      email,
      password,
    };

    try {
      const response = await api.post("login", data);
      const { token } = response.data;
      setToken(token);
      navigate("/feed");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <HomeContainer>
      <HomeForm onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </HomeForm>
    </HomeContainer>
  );
}
