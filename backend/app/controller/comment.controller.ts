import { Request, Response } from "express";
import { MongooseError } from "mongoose";
import { MongoComment } from "../@types/comment";
import { commentModel } from "../model/comment.model";
import { commentViewRender, commentViewRenderMany } from "../view/comment.view";

export const commentController = {
  async index(req: Request, res: Response) {
    try {
      const comments = await commentModel
        .find<MongoComment>()
        .populate("user")
        .populate("post");
      return res.json(commentViewRenderMany(comments));
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

  async show(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const comment = await commentModel
        .findOne<MongoComment>({ _id: id })
        .populate("user")
        .populate("post");

      if (!comment)
        return res.status(404).json({ message: "Comentário não encontrado" });

      return res.json(commentViewRender(comment));
    } catch (error: unknown) {
      if (error instanceof MongooseError)
        return res.json({
          message: "Erro ao buscar comentário!",
          error: error.message,
        });
      return res.json({
        message: "Erro ao buscar comment!",
      });
    }
  },

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const comment = await commentModel.deleteOne({ _id: id });

      if (comment.deletedCount !== 1)
        return res.status(404).json({ message: "Comentário não deletado" });

      return res.json({ message: `Comentário ${id} deletado com sucesso` });
    } catch (error: unknown) {
      if (error instanceof MongooseError)
        return res.json({
          message: "Erro ao buscar comentário!",
          error: error.message,
        });

      return res.json({
        message: "Erro ao buscar comentário!",
      });
    }
  },
};
