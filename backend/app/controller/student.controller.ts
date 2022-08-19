import { students } from "../../mocks/student";
import { Request, Response } from "express";

export const studentController = {
  async index(req: Request, res: Response) {
    return res.json(students);
  },

  async create(req: Request, res: Response) {
    const { nome, email, senha, id } = req.body;

    students.push({ name: nome, email, password: senha, id });

    return res.status(201).json({ message: "Aluno criado com sucesso!" });
  },

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const foundedStudent = students.find(
      (student) => student.id === Number(id)
    );

    if (!foundedStudent)
      return res.status(404).json({ message: "Aluno não encontrado" });

    return res.json(foundedStudent);
  },

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    const studentsWithDeletion = students.filter(
      (student) => student.id !== Number(id)
    );

    if (studentsWithDeletion.length === students.length)
      return res.status(404).json({ message: "Aluno não encontrado" });

    return res.json({ message: "Aluno deletado com sucesso" });
  },
};
