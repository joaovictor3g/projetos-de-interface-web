import { Post } from "@/components/shared/Post";
import { ProfileBox } from "@/components/shared/ProfileBox";
import { infoPosts } from "@/mocks/posts";
import { FeedContainer } from "./styles";

export function Feed() {
  return (
    <FeedContainer>
      {/* <ProfileBox /> */}
      <div className="posts-wrapper">
        {infoPosts.map((post) => (
          <Post key={post.id} data={post} />
        ))}
      </div>
    </FeedContainer>
  );
}
