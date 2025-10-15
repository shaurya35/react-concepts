import './App.css'
import React from "react";

function App() {
  const [ seconds, setSeconds ] = React.useState(0);

  React.useEffect(()=> {
    const interval = setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);

    return () => {clearInterval(interval)}
  })

  return (
    <>
      {seconds}
    </>
  )
}

export default App
