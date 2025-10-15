import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  }
  
  const Decrement = () => {
    setCount(count - 1);
  }

  return (
    <>
      <div>
        {count}
      </div>
      <button onClick={() => setCount(count + 1)}>
        Increment  
      </button>  
      <button onClick={Decrement}>
        Decrement
      </button>
    </>
  )
}

export default App
