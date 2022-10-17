import { Link } from "react-router-dom";
import { NotFoundContainer } from "./styles";

export function NotFound() {
  return (
    <NotFoundContainer>
      <h1>Page not found</h1>

      <Link to="/">Voltar para página inicial</Link>
    </NotFoundContainer>
  );
}
