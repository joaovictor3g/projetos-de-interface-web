import { students, Student } from "../../mocks/student";
import { Request, Response } from "express";

export const studentController = {
  async index(req: Request, res: Response) {
    const { min_ira: minIra, max_ira: maxIra } = req.query;

    let newStudents = [...students];

    if (!!minIra) {
      newStudents = newStudents.filter(
        (student) => student.ira >= Number(minIra)
      );
    }

    if (!!maxIra) {
      newStudents = newStudents.filter(
        (student) => student.ira <= Number(maxIra)
      );
    }

    return res.json(newStudents);
  },

  async create(req: Request, res: Response) {
    const { nome, email, senha, id, ira } = req.body;
    students.push({ name: nome, email, password: senha, id, ira });
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

    return res.json({
      message: "Aluno deletado com sucesso",
      data: studentsWithDeletion,
    });
  },
};
