import { Request, Response } from "express";
import { userModel } from "../model/user.model";
import { MongooseError } from "mongoose";

import bcrypt from "bcrypt";

export const userController = {
  async index(req: Request, res: Response) {
    try {
      const users = await userModel.find();
      return res.json(users);
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
    } catch (err: any) {
      return res.json({
        message: "Erro ao criar usuário",
        error: err?.message,
      });
    }
  },

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const foundedUser = await userModel.findOne({ _id: id });

    if (!foundedUser)
      return res.status(404).json({ message: "Usuário não encontrado" });

    return res.json(foundedUser);
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