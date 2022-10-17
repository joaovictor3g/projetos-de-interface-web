import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { MongooseError } from "mongoose";
import { MongoUser } from "../@types/user";
import { userModel } from "../model/user.model";
import { userViewRender, userViewRenderMany } from "../view/user.view";

export const userController = {
  async index(req: Request, res: Response) {
    try {
      const users = await userModel.find<MongoUser>();
      return res.json(userViewRenderMany(users));
    } catch (error: unknown) {
      if (error instanceof MongooseError)
        return res.json({ message: "Erro ao buscar!", error: error.message });
      return res.json({ message: "Erro ao buscar!" });
    }
  },

  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    try {
      await userModel.create({
        name,
        email,
        password: bcrypt.hashSync(password, 10),
      });

      return res.status(201).json({ message: "Usuário criado com sucesso!" });
    } catch (err: unknown) {
      if (err instanceof MongooseError) {
        return res.json({
          message: "Erro ao criar usuário",
          error: err?.message,
        });
      }

      return res.json({ message: "Erro ao criar usuário" });
    }
  },

  async show(req: Request, res: Response) {
    const { userId } = req;

    const foundedUser = await userModel.findOne<MongoUser>({ _id: userId });

    if (!foundedUser)
      return res.status(404).json({ message: "Usuário não encontrado" });

    return res.json(userViewRender(foundedUser));
  },

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const usersWithDeletion = await userModel.deleteOne({ _id: id });

      return res.json({
        message: "Usuário deletado com sucesso",
        data: usersWithDeletion,
      });
    } catch (error: unknown) {
      if (error instanceof MongooseError)
        return res
          .status(404)
          .json({ message: "Usuário não encontrado", error: error.message });
      return res.status(404).json({ message: "Usuário não encontrado" });
    }
  },
};
