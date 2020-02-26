import React, { useState, useContext } from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Box from "../components/Box";
import { AuthContext } from "../context/auth";
import { useForm } from "../util/hooks";

const Login = props => {
  const context = useContext(AuthContext);
  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    username: "",
    password: ""
  });
  const [errors, setErrors] = useState({});

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, result) {
      context.login(result.data.login);
      props.history.push("/admin");
    },
    onError({ graphQLErrors }) {
      console.log(graphQLErrors);
    },
    variables: values
  });

  function loginUserCallback() {
    loginUser();
  }

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
          onChange={onChange}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={onChange}
        />
        <button className="btn" onClick={onSubmit}>
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
