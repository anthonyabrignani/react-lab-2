import PostInList from "./PostInList";
import Post from "../model/Post";
import { useState } from "react";
import "./SocialPosts.css";

function SocialPosts() {
  const [posts, setPosts] = useState<Post[]>([
    { title: "crimson", thought: "a" },
    { title: "blue", thought: "b" },
    { title: "orange", thought: "c" },
  ]);

  function handleDeletePost(index: number) {
    setPosts((prevPosts) => [
      ...prevPosts.slice(0, index),
      ...prevPosts.slice(index + 1),
    ]);
  }

  return (
    <div className="SocialPosts">
      <header>
        <h1>My Thoughts</h1>
      </header>
      <p>
      <button>New Thought</button>
      </p>
      <section className="PostBox">
      {posts.map((post, i) => (
        <PostInList
          key={i}
          post={post}
          onDelete={() => handleDeletePost(i)}
        />
      ))}
      </section>
    </div>
  );
}

export default SocialPosts;
