import { Request, Response } from "express";
import { posts } from "../../mocks/posts";

export const postController = {
  async index(req: Request, res: Response) {
    return res.json(posts);
  },
};
