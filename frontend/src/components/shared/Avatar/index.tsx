import { User } from "@/contexts/AuthContext";
import { AvatarContainer, Column, Row } from "./styles";
import mockImg from "./woman-img.png";

interface AvatarProps {
  direction?: "horizontal" | "vertical";
  user: User | null;
}

export function Avatar({ direction = "horizontal", user }: AvatarProps) {
  const Wrapper = direction === "horizontal" ? Row : Column;

  return (
    <AvatarContainer className="avatar">
      <Wrapper>
        <div className="image-wrapper">
          <img src={mockImg} alt="" />
        </div>
        <div className="user-infos">
          <strong>{user?.name}</strong>
          <span>{user?.email}</span>
        </div>
      </Wrapper>
    </AvatarContainer>
  );
}
