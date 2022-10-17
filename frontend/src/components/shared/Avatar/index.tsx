import { User } from "@/contexts/AuthContext";
import { AvatarContainer, Column, Row } from "./styles";
import mockImg from "./woman-img.png";

interface AvatarProps {
  direction?: "horizontal" | "vertical";
  user: User | null;
  variant?: "simple" | "large";
}

export function Avatar({
  direction = "horizontal",
  user,
  variant = "large",
}: AvatarProps) {
  const Wrapper = direction === "horizontal" ? Row : Column;

  return (
    <AvatarContainer className="avatar" $bordered={variant === "large"}>
      <Wrapper>
        <div className="image-wrapper">
          <img src={mockImg} alt="" />
        </div>
        {variant === "large" && (
          <div className="user-infos">
            <strong>{user?.name}</strong>
            <span>{user?.email}</span>
          </div>
        )}
      </Wrapper>
    </AvatarContainer>
  );
}
