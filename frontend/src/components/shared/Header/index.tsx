import { HeaderContainer, HeaderWrapper } from "./styles";
import logoImg from "@/assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <img src={logoImg} alt="" />
      </HeaderWrapper>
    </HeaderContainer>
  );
}
