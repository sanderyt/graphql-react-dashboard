import React, { useState, useContext } from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Box from "../components/Box";

const Login = props => {
  const [input, setInput] = useState({});
  const [errors, setErrors] = useState({});

  const inputHandler = event => {
    const value = event.target.value;
    setInput({ ...input, [event.target.name]: value });
  };

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, result) {
      props.history.push("/");
      console.log(result);
    },
    onError(err) {
      console.log(err.errors, "errors");
      // setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: input
  });

  const submitHandler = event => {
    event.preventDefault();
    loginUser();
  };

  return (
    <div>
      <h1>Login</h1>
      <Box>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
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

const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export default Login;
