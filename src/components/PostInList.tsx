import "./PostInList.css";
import Post from "../model/Post";

interface Props {
  post: Post;
  onDelete?: () => void;
}

function PostInList({ post, onDelete }: Props) {

  return <div className="PostInList" onClick={onDelete}></div>;
}

export default PostInList;