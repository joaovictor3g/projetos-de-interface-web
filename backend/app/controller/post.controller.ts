import { Request, Response } from "express";
import { MongooseError } from "mongoose";
import { postModel } from "../model/post.model";

export const postController = {
  async index(req: Request, res: Response) {
    try {
      const posts = await postModel.find();
      return res.json(posts);
    } catch {}
  },

  async create(req: Request, res: Response) {
    const { text, likes, user } = req.body;
    try {
      await postModel.create({
        text,
        likes,
        user,
      });
      return res.status(201).json({ message: "Post criado com sucesso!" });
    } catch {}
  },

  async show(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const post = await postModel.findOne({ _id: id });

      if (!post)
        return res.status(404).json({ message: "Post não encontrado" });
      return res.json(post);
    } catch (error: unknown) {
      if (error instanceof MongooseError)
        return res.json({
          message: "Erro ao buscar post!",
          error: error.message,
        });
      return res.json({
        message: "Erro ao buscar post!",
      });
    }
  },

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const post = await postModel.deleteOne({ _id: id });

      if (post.deletedCount !== 1)
        return res.status(404).json({ message: "Post não deletado" });

      return res.json({ message: `Post ${id} deletado com sucesso` });
    } catch (error: unknown) {
      if (error instanceof MongooseError)
        return res.json({
          message: "Erro ao buscar post!",
          error: error.message,
        });

      return res.json({
        message: "Erro ao buscar post!",
      });
    }
  },
};
