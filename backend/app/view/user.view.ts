import { MongoUser, User } from "../@types/user";

function render(user: MongoUser): Omit<User, "password"> {
  return {
    name: user.name,
    email: user.email,
    id: user._id,
  };
}

function renderMany(users: MongoUser[]): Omit<User, "password">[] {
  return users.map((user) => render(user));
}

export { render as userViewRender, renderMany as userViewRenderMany };
