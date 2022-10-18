import { MongoUser, User } from "./user";

export interface Post {
  id: string;
  text: string;
  likes: number;
  user?: Omit<User, "password">;
  createdAt: Date;
}

export interface MongoPost extends Omit<Post, "id"> {
  _id: string;
}
