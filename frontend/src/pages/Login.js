import React, { useState, useContext } from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Box from "../components/Box";
import { AuthContext } from "../context/auth";

const Login = props => {
  const context = useContext(AuthContext);
  const [input, setInput] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  const inputHandler = event => {
    const value = event.target.value;
    setInput({ ...input, [event.target.name]: value });
  };

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, result) {
      context.login(result.data.login);
      props.history.push("/admin");
    },
    onError({ graphQLErrors }) {
      console.log(graphQLErrors);
    },
    variables: input
  });

  const submitHandler = () => {
    loginUser();
  };

  return (
    <div>
      <h1>Login</h1>
      <p>
        This dashboard was made by
        <a href="http://www.linkedin.com"> Sander van Rijsoort </a>
      </p>
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
