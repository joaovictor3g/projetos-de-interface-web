import { IPost } from "@/@types/post";
import { Post } from "@/components/shared/Post";
import { ProfileBox } from "@/components/shared/ProfileBox";
import { useIntersection } from "@/hooks/useIntersection";
import { api } from "@/services/api";
import { useEffect, useState } from "react";
import { FeedContainer } from "./styles";

export function Feed() {
  const [visible, instanceRef] = useIntersection<HTMLParagraphElement>();

  const [posts, setPosts] = useState<IPost[]>([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  async function fetchPosts() {
    try {
      const response = await api.get(`post`, {
        params: {
          page,
          pageSize: 1,
        },
      });

      const { posts: postsData } = response.data;

      if (!postsData.length) {
        setHasMore(false);
        return;
      }

      setPosts([...posts, ...postsData]);
    } catch (error) {}
  }

  useEffect(() => {
    fetchPosts();
  }, [page]);

  useEffect(() => {
    if (visible) setPage((oldPage) => oldPage + 1);
  }, [visible]);

  return (
    <FeedContainer>
      <ProfileBox />
      <div className="posts-wrapper">
        {posts.map((post) => (
          <Post key={post.id} data={post} />
        ))}

        {hasMore && (
          <p ref={instanceRef} className="load-more">
            Carregando mais posts...
          </p>
        )}
      </div>
    </FeedContainer>
  );
}
