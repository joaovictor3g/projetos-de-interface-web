import { IPost } from "@/@types/post";
import { Post } from "@/components/shared/Post";
import { ProfileBox } from "@/components/shared/ProfileBox";
import { api } from "@/services/api";
import { useEffect, useState } from "react";
import { FeedContainer } from "./styles";

export function Feed() {
  const [posts, setPosts] = useState<IPost[]>([]);
  useEffect(() => {
    api.get("post").then((response) => setPosts(response.data));
  }, []);

  return (
    <FeedContainer>
      <ProfileBox />
      <div className="posts-wrapper">
        {posts.map((post) => (
          <Post key={post.id} data={post} />
        ))}
      </div>
    </FeedContainer>
  );
}
