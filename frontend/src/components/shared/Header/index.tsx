import { HeaderContainer, HeaderWrapper } from "./styles";
import logoImg from "@/assets/logo.svg";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Link to="/">
          <img src={logoImg} alt="" />
        </Link>
      </HeaderWrapper>
    </HeaderContainer>
  );
}
