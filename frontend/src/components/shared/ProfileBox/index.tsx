import { Avatar } from "../Avatar";
import { ProfileBoxContainer } from "./styles";
import { Edit } from "@/icons/Edit";
import { useAuth } from "@/hooks/useAuth";

export function ProfileBox() {
  const { user } = useAuth();

  return (
    <ProfileBoxContainer>
      <Avatar direction="vertical" user={user} />
      <div className="edit-profile">
        <button>
          <Edit />
          Editar seu perfil
        </button>
      </div>
    </ProfileBoxContainer>
  );
}
