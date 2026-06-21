import "./first.css";

function First({ post }) {
  return (
    <div className="card">
      <img src={post.imgUrl} alt={post.title} className="card-img" />

      <div className="card-content">
        <h2>{post.title}</h2>

        <p>{post.body}</p>

        <h4>Author: {post.author}</h4>
      </div>
    </div>
  );
}

export default First;