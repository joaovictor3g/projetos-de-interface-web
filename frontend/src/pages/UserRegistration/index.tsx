import { Input, Submit } from "@/components/layout/Form";
import { api } from "@/services/api";
import { UserRegistrationContainer, UserRegistrationForm } from "./styles";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const schema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().email().required("Email é obrigatório"),
  password: yup
    .string()
    .min(6, "Senha deve conter no minímo 6 caracteres")
    .required("Senha é obrigatória"),
});

type FormInputType = yup.InferType<typeof schema>;

export function UserRegistration() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormInputType>({ resolver: yupResolver(schema) });

  async function onSubmit(data: FormInputType) {
    try {
      await api.post("/user", data);
      console.log("Usuário criado");
    } catch (error) {}
  }

  return (
    <UserRegistrationContainer>
      <UserRegistrationForm onSubmit={handleSubmit(onSubmit)}>
        <h1>Criar novo usuário</h1>
        <Input
          placeholder="Digite seu nome"
          error={errors.name}
          {...register("name")}
        />
        <Input
          type="email"
          placeholder="Digite seu e-mail"
          error={errors.email}
          {...register("email")}
        />
        <Input
          type="password"
          placeholder="Digite sua senha"
          error={errors.password}
          {...register("password")}
        />

        <Submit loading={isSubmitting}>Criar novo usuário</Submit>
      </UserRegistrationForm>
    </UserRegistrationContainer>
  );
}
