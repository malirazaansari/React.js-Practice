import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

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
      <h1 className="text-3xl bg-green-400 rounded-md p-2">My Age: {count}</h1>
      <Card username="Ali raza" />
      <Card
        username="Ansari"
        posts="Full Stack dev"
      />
      <Card />
      {/* <h2>count: {count}</h2>
      <button onClick={addvalue}>Add Value</button>
      <button onClick={removevalue}>Remove Value</button>
      <p>Footer: {count}</p> */}
    </>
  );
}

export default App;
