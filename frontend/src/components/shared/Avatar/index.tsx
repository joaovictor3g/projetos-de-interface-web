import { User } from "@/contexts/AuthContext";
import { AvatarContainer, Column, Row } from "./styles";

interface AvatarProps {
  direction?: "horizontal" | "vertical";
  user: User | null;
  variant?: "simple" | "large";
  image?: string;
}

export function Avatar({
  direction = "horizontal",
  user,
  variant = "large",
  image,
}: AvatarProps) {
  const Wrapper = direction === "horizontal" ? Row : Column;
  const avatarFallback = user?.name
    .split(" ")
    .map((str, i) => {
      if (i > 1) {
        return null;
      }
      return str.charAt(0);
    })
    .filter(Boolean)
    .join("");

  return (
    <AvatarContainer className="avatar" $bordered={variant === "large"}>
      <Wrapper>
        <div className="image-wrapper">
          {!!image && <img src={image} alt="" />}
          <span>{avatarFallback}</span>
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
