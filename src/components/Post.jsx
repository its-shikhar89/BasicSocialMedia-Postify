import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList as PostListData } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListData);

  return <div className="card post-card" style={{ width: "30rem" }}>
    <div className="card-body">
      <h5 className="card-title">{post.title}</h5>
      <span onClick={() => { deletePost(post.id) }} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        <AiFillDelete />
      </span>
      <p className="card-text">{post.body}</p>
      {post.tags.map((tag) => <span key={tag} className="badge text-bg-primary hashTag">{tag}</span>)}
      <div className="alert alert-success reaction" role="alert">
        This post has been reacted by {post.reactions} people.
      </div>
    </div>
  </div>
}

export default Post;