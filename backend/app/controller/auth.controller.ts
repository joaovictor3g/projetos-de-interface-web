import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import { userModel } from "../model/user.model";
import jwt from "jsonwebtoken";

export const authController = {
  async index(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const user = await userModel.findOne({ email });

      if (!user)
        return res.status(404).json({ message: "Usuário inexistente" });

      if (!bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: "Login/Senha incorretos" });
      }
      const token = jwt.sign({ user }, process.env.JWT_SECRET);
      return res.status(200).json({ message: "ok", token });
    } catch {
      return res.status(401).json({ message: "Erro ao validar informações" });
    }
  },

  async check(req: Request, res: Response, next: NextFunction) {
    const { token } = req.headers;

    jwt.verify(token as string, process.env.JWT_SECRET, (error) => {
      if (error) {
        return res
          .status(401)
          .json({ message: "Usuário não autenticado", error: error.message });
      }

      next();
    });
  },
};
