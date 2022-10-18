import { Request, Response } from "express";
import { MongooseError } from "mongoose";
import { MongoComment } from "../@types/comment";
import { commentModel } from "../model/comment.model";
import { commentViewRender, commentViewRenderMany } from "../view/comment.view";

export const commentController = {
  async index(req: Request, res: Response) {
    const { postId } = req.params;

    try {
      const comments = await commentModel
        .find<MongoComment>({ post: postId })
        .populate("user");

      return res.json(commentViewRenderMany(comments));
    } catch {}
  },

  async create(req: Request, res: Response) {
    const { post, comment } = req.body;
    const userId = req.userId;

    try {
      const newComment = await commentModel.create({
        user: userId,
        post,
        comment,
      });

      const commentCreated = await commentModel
        .findOne<MongoComment>({ _id: newComment._id })
        .populate("user");

      return res.status(201).json(commentViewRender(commentCreated));
    } catch {}
  },

  async show(req: Request, res: Response) {
    const { postId } = req.params;

    try {
      const comment = await commentModel
        .findOne<MongoComment>({ post: postId })
        .populate("user");

      if (!comment)
        return res.status(404).json({ message: "Comentário não encontrado" });

      return res.json(commentViewRender(comment));
    } catch (error: unknown) {
      if (error instanceof MongooseError) {
        return res.json({
          message: "Erro ao buscar comentário!",
          error: error.message,
        });
      }
      return res.json({
        message: "Erro ao buscar comment!",
      });
    }
  },

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const userId = req.userId;

    try {
      const comment = await commentModel.deleteOne({
        $and: [{ _id: id }, { user: userId }],
      });

      if (comment.deletedCount !== 1)
        return res.status(404).json({ message: "Comentário não deletado" });

      return res.json({ message: `Comentário ${id} deletado com sucesso` });
    } catch (error: unknown) {
      if (error instanceof MongooseError) {
        return res.json({
          message: "Erro ao buscar comentário!",
          error: error.message,
        });
      }

      return res.json({
        message: "Erro ao buscar comentário!",
      });
    }
  },
};
