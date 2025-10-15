import { useEffect, useState } from "react";
import "./App.css";

interface Posts {
  id: number;
  name: string;
}

const posts = [
  { id: 1, name: "post1" },
  { id: 2, name: "post2" },
  { id: 3, name: "post3" },
  { id: 4, name: "post4" },
];

function App() {
  const [allPosts, setAllPosts] = useState<Posts[]>([]);

  useEffect(() => {
    setAllPosts(posts);
  }, []);
  return (
    <>
      {/* {allPosts.map(posts => {
        return <div key={posts.id}>{posts.name}</div>
      })}      */}
      {allPosts.map((posts) => (
        <div key={posts.id}>{posts.name}</div>
      ))}
    </>
  );
}

export default App;
