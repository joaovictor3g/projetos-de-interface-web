export interface Post {
  id: string;
  text: string;
  likes: number;
  user: string;
}

export interface MongoPost extends Omit<Post, "id"> {
  _id: string;
}
