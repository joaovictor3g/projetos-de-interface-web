export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface MongoUser extends Omit<User, "id" | "password"> {
  _id: string;
}
