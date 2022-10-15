import { AvatarContainer, Column, Row } from "./styles";
import mockImg from "./woman-img.png";

interface AvatarProps {
  direction?: "horizontal" | "vertical";
}

export function Avatar({ direction = "horizontal" }: AvatarProps) {
  const Wrapper = direction === "horizontal" ? Row : Column;

  return (
    <AvatarContainer className="avatar">
      <Wrapper>
        <div className="image-wrapper">
          <img src={mockImg} alt="" />
        </div>
        <div className="user-infos">
          <strong>Leslie Alexander</strong>
          <span>UI Designer</span>
        </div>
      </Wrapper>
    </AvatarContainer>
  );
}
