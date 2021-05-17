import "./PostForm.css";
import Post from '../model/Post';
import PostInList from "./PostInList";
import { useState, FormEvent } from "react";

interface Props {
  onSubmit: (post: Post) => void;
  onClose: () => void;
}

function PostForm({onSubmit}: Props) {
  const [title, setTitle] = useState("50");
  const [thought, setThought] = useState("crimson");

  function handleSubmit(e:FormEvent) {
    e.preventDefault();

    const post: Post = {
      title: title,
      thought: thought,
    }
    onSubmit(post);
    setTitle("50");
    setThought("crimson")
  }

  return (
    <form className="PostForm" onSubmit={handleSubmit}>
      <p>
        <label>
          Title -
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Thought -
          <input
            type="text"
            value={thought}
            onChange={(e) => setThought(e.target.value)}
          />
        </label>
      </p>
      <p>
          <button type="submit">Submit</button>
      </p>
      <PostInList
        post={{ title: (title), thought: (thought), }}
      />
    </form>
  );
}

export default PostForm;
