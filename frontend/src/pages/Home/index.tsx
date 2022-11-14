import { Input, Submit } from "@/components/layout/Form";
import { api } from "@/services/api";
import { setToken } from "@/utils/localStorage";
import { useNavigate, Link } from "react-router-dom";
import { HomeContainer, HomeForm } from "./styles";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useAuth } from "@/hooks/useAuth";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const schema = yup.object({
  email: yup.string().email().required("Email é obrigatório"),
  password: yup
    .string()
    .min(6, "Senha deve conter no minímo 6 caracteres")
    .required("Senha é obrigatória"),
});

type FormInputType = yup.InferType<typeof schema>;

export function Home() {
  const { me } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputType>({ resolver: yupResolver(schema) });

  const navigate = useNavigate();

  async function onSubmit(data: FormInputType) {
    try {
      const response = await api.post("login", data);
      const { token } = response.data;
      setToken(token);
      await me();
      navigate("/feed");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <HomeContainer>
      <HomeForm onSubmit={handleSubmit(onSubmit)}>
        <h1>Faça login</h1>

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
        <Link to="/user-registration" className="user-registration-link">
          Criar novo usuário
          <ArrowRightIcon width={20} />
        </Link>
        <Submit>Login</Submit>
      </HomeForm>
    </HomeContainer>
  );
}
