export interface Comment {
  user: string;
  post: string;
  id: string;
}

export interface MongoComment extends Omit<Comment, "id"> {
  _id: string;
}
