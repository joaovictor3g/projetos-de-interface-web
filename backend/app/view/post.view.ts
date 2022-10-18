import { MongoPost, Post } from "../@types/post";
import { userViewRender } from "./user.view";

function render(post: MongoPost): Post {
  return {
    id: post._id,
    likes: post.likes,
    text: post.text,
    user: userViewRender(post.user as any),
    createdAt: post.createdAt,
  };
}

function renderMany(posts: MongoPost[]): Post[] {
  return posts.map((post) => render(post));
}

export { render as postViewRender, renderMany as postViewRenderMany };
