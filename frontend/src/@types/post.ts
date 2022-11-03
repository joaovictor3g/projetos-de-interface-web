import { User } from "./user";

export interface IPost {
  id: string;
  likes: number;
  text: string;
  createdAt: Date;
  user: User;
}
