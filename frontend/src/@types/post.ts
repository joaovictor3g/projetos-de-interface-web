import { User } from "./user";

export interface IPost {
  id: string;
  likes: string;
  text: string;
  createdAt: Date;
  user: User;
}
