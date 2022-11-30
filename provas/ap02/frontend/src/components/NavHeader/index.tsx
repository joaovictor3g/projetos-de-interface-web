import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";

export function NavHeader() {
  return (
    <HeaderContainer>
      <nav>
        <ul>
          <li>
            <NavLink to="mostrar">Mostrar TODOS</NavLink>
          </li>

          <li>
            <NavLink to="cadastro">Criar TODO</NavLink>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
}
