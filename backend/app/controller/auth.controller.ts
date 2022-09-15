import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { User, userModel } from "../model/user.model";

export const authController = {
  async index(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const user = await userModel.findOne({ email });

      console.log(user);

      if (!user)
        return res.status(404).json({ message: "Usuário inexistente" });

      if (!bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: "Invalid login" });
      }

      return res.status(200).json({ message: "ok" });
    } catch {
      return res.status(401).json({ message: "Invalid login" });
    }
  },
};
