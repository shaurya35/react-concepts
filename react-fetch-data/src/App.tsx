import "./App.css";
import React from "react";

interface Item {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

function App() {
  const [data, setData] = React.useState<Item[]>([]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/todos" 
        );
        console.log(res);
        const json = await res.json();
        console.log(json);
        setData(json);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, []);

  if (data.length === 0) return <div>Loading...</div>;

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <p>User ID: {item.userId}</p>
          <p>Title: {item.title}</p>
          <p>Completed: {item.completed ? "Yes" : "No"}</p>
        </div>
      ))}
    </div>
  );
}

export default App;