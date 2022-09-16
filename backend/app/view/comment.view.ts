import { MongoComment, Comment } from "../@types/comment";

function render(comment: MongoComment): Comment {
  return {
    id: comment._id,
    post: comment.post,
    user: comment.user,
  };
}

function renderMany(comments: MongoComment[]): Comment[] {
  return comments.map((comment) => render(comment));
}

export { render as commentViewRender, renderMany as commentViewRenderMany };
