import { Avatar } from "../Avatar";
import { ProfileBoxContainer, ProfileWrapper } from "./styles";
import { Edit } from "@/icons/Edit";
import { useAuth } from "@/hooks/useAuth";
import { CreatePostModal } from "@/components/layout/CreatePostModal";

export function ProfileBox() {
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
          <CreatePostModal />
        </div>
      </ProfileWrapper>
    </ProfileBoxContainer>
  );
}
