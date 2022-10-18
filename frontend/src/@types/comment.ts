import { User } from "./user";

export interface IComment {
  user: User;
  post: string;
  id: string;
  comment: string;
}
