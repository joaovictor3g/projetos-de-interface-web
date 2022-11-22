import { Avatar } from "../Avatar";
import { ProfileBoxContainer, ProfileWrapper } from "./styles";
import { Edit } from "@/icons/Edit";
import { useAuth } from "@/hooks/useAuth";
import { ReactNode } from "react";

interface ProfileBoxProps {
  children: ReactNode;
}

export function ProfileBox({ children }: ProfileBoxProps) {
  const { user } = useAuth();

  return (
    <ProfileBoxContainer>
      <ProfileWrapper>
        <Avatar direction="vertical" user={user} />
        <div className="button-group">
          <button className="edit-button">
            <Edit />
            Editar seu perfil
          </button>
          {children}
        </div>
      </ProfileWrapper>
    </ProfileBoxContainer>
  );
}
