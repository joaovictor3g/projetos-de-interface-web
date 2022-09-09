import { students, Student } from "../../mocks/student";
import { Request, Response } from "express";
import { studentModel } from "../model/student.model";
import { MongooseError } from "mongoose";

export const studentController = {
  async index(req: Request, res: Response) {
    const students = await studentModel.find();
    return res.json(students);
  },

  async create(req: Request, res: Response) {
    const { nome, email, senha, matricula } = req.body;
    try {
      await studentModel.create({
        name: nome,
        matricula,
        email,
        password: senha,
      });
      return res.status(201).json({ message: "Aluno criado com sucesso!" });
    } catch (err: any) {
      return res.json({
        message: "Erro ao criar estudante",
        error: err?.message,
      });
    }
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

    return res.json({
      message: "Aluno deletado com sucesso",
      data: studentsWithDeletion,
    });
  },
};
