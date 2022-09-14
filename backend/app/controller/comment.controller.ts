import { Request, Response } from "express";
import { commentModel } from "../model/comment.model";

export const commentController = {
  async index(req: Request, res: Response) {
    try {
      const comments = await commentModel
        .find()
        .populate("user")
        .populate("post");
      return res.json(comments);
    } catch {}
  },

  async create(req: Request, res: Response) {
    const { user, post } = req.body;
    try {
      await commentModel.create({
        user,
        post,
      });
      return res
        .status(201)
        .json({ message: "Comentário criada com sucesso!" });
    } catch {}
  },
};
