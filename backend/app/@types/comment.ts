import { MongoUser } from "./user";

export interface Comment {
  user: MongoUser;
  post: string;
  id: string;
  comment: string;
}

export interface MongoComment extends Omit<Comment, "id"> {
  _id: string;
}
