import { Request, Response } from "express";
import { posts } from "../../mocks/posts";

export const postController = {
  async index(req: Request, res: Response) {
    return res.json(posts);
  },

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const foundedPost = posts.find((post) => post.id === Number(id));

    if (!foundedPost)
      return res.status(404).json({ message: "Post não encontrado" });

    return res.json(foundedPost);
  },

  async create(req: Request, res: Response) {
    const { texto, likes, id } = req.body;
    posts.push({ texto, likes, id });
    return res.status(201).json({ message: "Post criado com sucesso!" });
  },

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    const postsWithDeletion = posts.filter((post) => post.id !== Number(id));

    if (postsWithDeletion.length === posts.length)
      return res.status(404).json({ message: "Post não encontrado" });

    return res.json({
      message: "Post deletado com sucesso",
      data: postsWithDeletion,
    });
  },
};
