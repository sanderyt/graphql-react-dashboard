import React, { useState } from "react";
import Box from "../components/Box";

const Login = () => {
  const [input, setInput] = useState({});

  const inputHandler = event => {
    const value = event.target.value;
    setInput({ ...input, [event.target.name]: value });
  };

  const submitHandler = () => {
    console.log(input, "input");
  };
  return (
    <div>
      <h1>Login</h1>
      <Box>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          onChange={inputHandler}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={inputHandler}
        />
        <button className="btn" onClick={submitHandler}>
          Login
        </button>
      </Box>
    </div>
  );
};

export default Login;
