import { HomeContainer, HomeForm } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <HomeForm>
        <input type="email" placeholder="Digite seu e-mail" />
        <input placeholder="Digite sua senha" />
        <button type="submit">Login</button>
      </HomeForm>
    </HomeContainer>
  );
}
