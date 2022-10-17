import { Post } from "@/components/shared/Post";
import { ProfileBox } from "@/components/shared/ProfileBox";
import { api } from "@/services/api";
import { useEffect } from "react";
import { FeedContainer } from "./styles";

export function Feed() {
  useEffect(() => {
    api.get("user").then((response) => console.log(response.data));
  }, []);

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
