import { Avatar } from "../../Avatar";
import { CommentContainer, CommentBox, CommentControls } from "./styles";
import { TrashIcon } from "@radix-ui/react-icons";
import { IComment } from "@/@types/comment";
import { useAuth } from "@/hooks/useAuth";

interface CommentProps {
  data: IComment;
}

export function Comment({ data }: CommentProps) {
  const { user } = useAuth();

  return (
    <CommentContainer>
      <Avatar user={data.user} variant="simple" />
      <CommentControls>
        <CommentBox>
          <header>
            <div className="user-infos">
              <strong>
                {data.user.name}{" "}
                {user?.email === data.user.email && <span>(você)</span>}
              </strong>
              <time>Cerca de 2h</time>
            </div>
            <button className="delete-comment">
              <TrashIcon width={20} height={20} />
            </button>
          </header>

          <p className="content">{data.comment}</p>
        </CommentBox>

        <button className="like">Aplaudir • 03</button>
      </CommentControls>
    </CommentContainer>
  );
}
