import { Textarea } from "@/components/layout/Form/Textarea";
import { Avatar } from "../Avatar";
import { PostContainer } from "./styles";

export function Post() {
  return (
    <PostContainer>
      <header>
        <Avatar />
        <time>Publicado há 1h</time>
      </header>

      <div className="content">
        <p>
          Fala galeraa 👋 Acabei de subir mais um projeto no meu portifa. É um
          projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto
          é DoctorCare 🚀 👉 jane.design/doctorcare #novoprojeto
        </p>
      </div>

      <footer>
        <form>
          <div className="control">
            <Textarea
              placeholder="Escreva um comentário..."
              label="Deixe seu feedback:"
            />
          </div>

          <button type="submit">Publicar</button>
        </form>
      </footer>
    </PostContainer>
  );
}
