import { Request, Response } from "express";
import { postModel } from "../model/post.model";

export const postController = {
  async index(req: Request, res: Response) {
    try {
      const disciplines = await postModel.find();
      return res.json(disciplines);
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
};
