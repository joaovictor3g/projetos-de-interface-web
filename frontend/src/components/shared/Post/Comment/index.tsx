import { Avatar } from "../../Avatar";
import { CommentContainer, CommentBox, CommentControls } from "./styles";
import { TrashIcon } from "@radix-ui/react-icons";
export function Comment() {
  return (
    <CommentContainer>
      <Avatar user={null} variant="simple" />
      <CommentControls>
        <CommentBox>
          <header>
            <div className="user-infos">
              <strong>
                Devon Lane <span>(você)</span>
              </strong>
              <time>Cerca de 2h</time>
            </div>
            <button className="delete-comment">
              <TrashIcon width={24} height={24} />
            </button>
          </header>

          <p className="content">Muito bom Devon, parabéns!! 👏👏</p>
        </CommentBox>

        <button className="like">Aplaudir • 03</button>
      </CommentControls>
    </CommentContainer>
  );
}
