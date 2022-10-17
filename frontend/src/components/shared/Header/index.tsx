import { HeaderContainer, HeaderFixedWrapper, HeaderWrapper } from "./styles";
import logoImg from "@/assets/logo.svg";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderFixedWrapper>
        <HeaderWrapper>
          <Link to="/">
            <img src={logoImg} alt="" />
          </Link>
        </HeaderWrapper>
      </HeaderFixedWrapper>
    </HeaderContainer>
  );
}
