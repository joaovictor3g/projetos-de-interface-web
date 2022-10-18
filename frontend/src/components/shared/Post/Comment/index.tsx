import { Avatar } from "../../Avatar";
import { CommentContainer, CommentBox, CommentControls } from "./styles";
import { TrashIcon } from "@radix-ui/react-icons";
import { IComment } from "@/@types/comment";
import { useAuth } from "@/hooks/useAuth";
import { api } from "@/services/api";

interface CommentProps {
  data: IComment;
  deleteComment(commentId: string): Promise<void>;
}

export function Comment({ data, deleteComment }: CommentProps) {
  const { user } = useAuth();
  const isMeLoggedIn = user?.email === data.user.email;

  return (
    <CommentContainer>
      <Avatar user={data.user} variant="simple" />
      <CommentControls>
        <CommentBox>
          <header>
            <div className="user-infos">
              <strong>
                {data.user.name} {isMeLoggedIn && <span>(você)</span>}
              </strong>
              <time>Cerca de 2h</time>
            </div>
            {isMeLoggedIn && (
              <button
                onClick={() => deleteComment(data.id)}
                className="delete-comment"
              >
                <TrashIcon width={20} height={20} />
              </button>
            )}
          </header>

          <p className="content">{data.comment}</p>
        </CommentBox>

        <button className="like">Aplaudir • 03</button>
      </CommentControls>
    </CommentContainer>
  );
}
