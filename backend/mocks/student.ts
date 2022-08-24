export const students = [
  {
    id: 1,
    name: "João Victor",
    email: "jvdias@email.com",
    password: "1222143",
    ira: 5000,
  },
  {
    id: 2,
    name: "João",
    email: "joao@email.com",
    password: "1222143",
    ira: 7000,
  },
  {
    id: 3,
    name: "Victor",
    email: "victor@email.com",
    password: "1222143",
    ira: 6000,
  },
];

export type Student = typeof students[0];
