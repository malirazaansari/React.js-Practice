import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(21);

  const addvalue = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  const removevalue = () => {
    setCount((prev) => prev - 1);
    setCount((prev) => prev - 1);
  };

  return (
    <>
      <h1>My Age: {count}</h1>
      <h2>count: {count}</h2>
      <button onClick={addvalue}>Add Value</button>
      <button onClick={removevalue}>Remove Value</button>
      <p>Footer: {count}</p>
    </>
  );
}

export default App;
