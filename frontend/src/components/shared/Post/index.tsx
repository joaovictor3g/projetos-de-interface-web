import { Submit } from "@/components/layout/Form";
import { Textarea } from "@/components/layout/Form/Textarea";
import { Avatar } from "../Avatar";
import { PostContainer, Markdown } from "./styles";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { IPost } from "@/@types/post";
import { difference as differenceToCreatedAt } from "@/utils/date";
import { Comment } from "./Comment";
interface PostProps {
  data: IPost;
}

export function Post({ data }: PostProps) {
  const { createdAt } = data;
  const formattedCreatedAt = differenceToCreatedAt(new Date(createdAt));

  return (
    <PostContainer>
      <header>
        <Avatar user={data.user} />
        <time>{formattedCreatedAt}</time>
      </header>

      <div className="content">
        <Markdown
          children={data.text}
          remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
          rehypePlugins={[rehypeRaw]}
          components={{
            code({ node, inline, className, children, ...props }) {
              console.log({ inline, className });

              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  style={dracula as any}
                  language={match[1] ?? "bash"}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
      </div>

      <footer>
        <form>
          <div className="control">
            <Textarea
              placeholder="Escreva um comentário..."
              label="Deixe seu feedback:"
            />
          </div>

          <Submit>Publicar</Submit>
        </form>

        <Comment />
      </footer>
    </PostContainer>
  );
}
