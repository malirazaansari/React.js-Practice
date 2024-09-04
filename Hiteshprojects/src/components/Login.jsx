import React, { useState, useContext } from "react";
import UserContext from "../context/userContext";

function Login() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        value={username}
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        placeholder="UserName"
      />{" "}
      <input
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default Login;
