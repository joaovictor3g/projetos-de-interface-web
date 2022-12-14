import { Request, Response } from "express";
import { MongooseError } from "mongoose";
import { MongoPost } from "../@types/post";
import { postModel } from "../model/post.model";
import { postViewRender, postViewRenderMany } from "../view/post.view";

export const postController = {
  async index(req: Request, res: Response) {
    const { page, pageSize } = req.query as unknown as {
      page: number;
      pageSize: number;
    };

    try {
      const posts = await postModel
        .find<MongoPost>()
        .populate("user")
        .sort({ createdAt: "desc" })
        .skip(page * pageSize)
        .limit(pageSize);

      const totalPages = await postModel.find().count();

      return res.json({
        totalPages: Math.ceil(totalPages / pageSize),
        posts: postViewRenderMany(posts),
      });
    } catch {}
  },

  async create(req: Request, res: Response) {
    const { text, likes } = req.body;
    const userId = req.userId;

    try {
      await postModel.create({
        text,
        likes,
        user: userId,
      });
      return res.status(201).json({ message: "Post criado com sucesso!" });
    } catch (err) {
      console.log(err);
    }
  },

  async show(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const post = await postModel.findOne<MongoPost>({ _id: id });

      if (!post)
        return res.status(404).json({ message: "Post não encontrado" });
      return res.json(postViewRender(post));
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
    const userId = req.userId;

    try {
      const post = await postModel.deleteOne({
        $and: [{ user: userId }, { _id: id }],
      });

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
