import { MongoComment, Comment } from "../@types/comment";

function render(comment: MongoComment): Comment {
  return {
    id: comment._id,
    post: comment.post,
    comment: comment.comment,
    user: {
      id: comment.user._id,
      email: comment.user.email,
      name: comment.user.name,
    } as any,
  };
}

function renderMany(comments: MongoComment[]): Comment[] {
  return comments.map((comment) => render(comment));
}

export { render as commentViewRender, renderMany as commentViewRenderMany };
