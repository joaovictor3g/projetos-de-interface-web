import { Link } from "react-router-dom";
import { NotFoundContainer } from "./styles";

export function NotFound() {
  return (
    <NotFoundContainer>
      <h1>Página não encontrada!</h1>

      <Link to="/">Voltar para página inicial</Link>
    </NotFoundContainer>
  );
}
