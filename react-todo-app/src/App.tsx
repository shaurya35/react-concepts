import { useState } from 'react';
import './App.css'

interface Todo {
  text: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState('');

  const addTodos = (e: React.FormEvent) => {
    e.preventDefault();
    if(text.trim()){
      setTodos([...todos, { text }]);
      setText('');
    }
  }
  
  const deleteTodo = (index: number) => {
    const newTodos= [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <>
      <form onSubmit={addTodos}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.text}
              <button onClick={() => {deleteTodo(index)}}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App