import { HeaderContainer, HeaderFixedWrapper, HeaderWrapper } from "./styles";
import logoImg from "@/assets/logo.svg";
import { Link } from "react-router-dom";
import { clear } from "@/utils/localStorage";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderFixedWrapper>
        <HeaderWrapper>
          <Link to="/" onClick={clear}>
            <img src={logoImg} alt="" />
          </Link>
        </HeaderWrapper>
      </HeaderFixedWrapper>
    </HeaderContainer>
  );
}
