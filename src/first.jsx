import "./First.css";

function First({ post }) {
  return (
    <div className="card">
      <img src={post.imgUrl} alt="post" />

      <h2>{post.title}</h2>

      <p>{post.body}</p>

      <h4>Written by: {post.author}</h4>
    </div>
  );
}

export default First;