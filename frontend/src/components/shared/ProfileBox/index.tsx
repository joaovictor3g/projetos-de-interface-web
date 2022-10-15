import { Avatar } from "../Avatar";
import { ProfileBoxContainer } from "./styles";
import { Edit } from "@/icons/Edit";

export function ProfileBox() {
  return (
    <ProfileBoxContainer>
      <Avatar direction="vertical" />
      <div className="edit-profile">
        <button>
          <Edit />
          Editar seu perfil
        </button>
      </div>
    </ProfileBoxContainer>
  );
}
