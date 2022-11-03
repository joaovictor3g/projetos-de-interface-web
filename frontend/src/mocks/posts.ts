import { IPost } from "@/@types/post";

export const infoPosts: IPost[] = [
  {
    id: "12313",
    user: {
      id: "12313",
      name: "Joao",
      email: "jooa@emai.com",
    },
    text: "Menino, tá quente demais hoje",
    likes: 1,
    createdAt: new Date(),
  },
  {
    id: "45646",
    user: {
      id: "98789",
      name: "Victor",
      email: "victor@emai.com",
    },
    text: "Num aguento mais essa quintura",
    likes: 3,
    createdAt: new Date(),
  },
];
