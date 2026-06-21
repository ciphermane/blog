import Posts from "./second";
import "./index.css";

function App() {
  return (
    <div>
      <h1 className="heading">Tech Blog Hub</h1>
      <p className="subtitle">
        Learn JavaScript, React, and MongoDB through simple articles.
      </p>

      <Posts />
    </div>
  );
}

export default App;