import First from "./First";

function Posts() {
  const blogPosts = [
    {
      title: "JavaScript",
      body: "JavaScript is used for web development.",
      author: "tahir",
      imgUrl: "https://picsum.photos/300"
    },

    {
      title: "React",
      body: "React is a JavaScript library.",
      author: "ikhlas",
      imgUrl: "https://picsum.photos/301"
    },

    {
      title: "MongoDB",
      body: "MongoDB is a NoSQL database.",
      author: "jasir",
      imgUrl: "https://picsum.photos/302"
    }
  ];

  return (
    <div className="container">
      {
        blogPosts.map((post, index) => (
          <First
            key={index}
            post={post}
          />
        ))
      }
    </div>
  );
}

export default Posts;