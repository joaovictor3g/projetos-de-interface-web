import { MongoPost, Post } from "../@types/post";

function render(post: MongoPost): Post {
  return {
    id: post._id,
    likes: post.likes,
    text: post.text,
    user: post.user,
  };
}

function renderMany(posts: MongoPost[]): Post[] {
  return posts.map((post) => render(post));
}

export { render as postViewRender, renderMany as postViewRenderMany };
