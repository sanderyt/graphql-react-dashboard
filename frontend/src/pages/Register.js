import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

import Box from "../components/Box";
import Spinner from "../components/Spinner";
import MessageCard from "../components/MessageCard";

const Register = () => {
  const [input, setInput] = useState({});
  const [errors, setErrors] = useState({});

  const inputHandler = event => {
    const value = event.target.value;
    setInput({ ...input, [event.target.name]: value });
  };

  const [registerUser, { loading }] = useMutation(REGISTER_USER, {
    update(proxy, result) {
      console.log(result);
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: input
  });

  const submitHandler = event => {
    event.preventDefault();
    registerUser();
  };

  return (
    <div>
      <h1>Register</h1>
      <Box>
        <h2>Sign up today for free</h2>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          onChange={inputHandler}
        />
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
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm password"
          onChange={inputHandler}
        />
        <button
          className={loading ? "btn btn--loading" : "btn btn--cta"}
          onClick={submitHandler}
        >
          {loading && <Spinner />}
          Register
        </button>
      </Box>
    </div>
  );
};

const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export default Register;
