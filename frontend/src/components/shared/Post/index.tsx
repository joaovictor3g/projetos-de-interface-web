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
import { FormEvent, useEffect, useState } from "react";
import { api } from "@/services/api";
import { IComment } from "@/@types/comment";
interface PostProps {
  data: IPost;
}

export function Post({ data }: PostProps) {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState<IComment[]>([]);

  const { createdAt } = data;
  const formattedCreatedAt = differenceToCreatedAt(new Date(createdAt));

  async function handleCreateComment(event: FormEvent) {
    event.preventDefault();

    const _data = {
      comment: newComment,
      post: data.id,
    };

    try {
      const response = await api.post("/comment", _data);
      const newCommentCreated = response.data;
      setComments((oldComments) => [...oldComments, newCommentCreated]);
      setNewComment("");
    } catch (error) {}
  }

  async function handleDeleteComment(commentId: string) {
    try {
      await api.delete(`/comment/${commentId}`);
      setComments((oldComments) =>
        oldComments.filter((comment) => comment.id !== commentId)
      );
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (data.id) {
      api
        .get(`/comment/${data.id}`)
        .then((response) => setComments(response.data));
    }
  }, [data.id]);

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
        <form onSubmit={handleCreateComment}>
          <div className="control">
            <Textarea
              placeholder="Escreva um comentário..."
              label="Deixe seu feedback:"
              value={newComment}
              onChange={({ target }) => setNewComment(target.value)}
            />
          </div>

          <Submit>Publicar</Submit>
        </form>

        {comments.map((comment) => (
          <Comment
            key={comment.id}
            data={comment}
            deleteComment={handleDeleteComment}
          />
        ))}
      </footer>
    </PostContainer>
  );
}
