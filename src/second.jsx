import First from "./first";

function Posts() {
  const blogPosts = [
    {
      title: "JavaScript Fundamentals",
      body: "JavaScript is the programming language of the web. It enables interactive websites, dynamic content, and modern web applications.",
      author: "Tahir",
      imgUrl:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600",
    },

    {
      title: "Getting Started with React",
      body: "React is a powerful JavaScript library used for building reusable user interfaces through components and state management.",
      author: "Ikhlas",
      imgUrl:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600",
    },

    {
      title: "Introduction to MongoDB",
      body: "MongoDB is a popular NoSQL database that stores information in flexible JSON-like documents and scales efficiently.",
      author: "Jasir",
      imgUrl:
        "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600",
    },
  ];

  return (
    <div className="container">
      {blogPosts.map((post, index) => (
        <First key={index} post={post} />
      ))}
    </div>
  );
}

export default Posts;