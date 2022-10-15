import { Post } from "@/components/shared/Post";
import { ProfileBox } from "@/components/shared/ProfileBox";
import { FeedContainer } from "./styles";

export function Feed() {
  return (
    <FeedContainer>
      <ProfileBox />
      <div className="posts-wrapper">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </FeedContainer>
  );
}
