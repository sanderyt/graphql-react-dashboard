import React, { useState, useContext } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

import Box from "../components/Box";
import Spinner from "../components/Spinner";
import MessageCard from "../components/MessageCard";
import { AuthContext } from "../context/auth";

const Register = props => {
  const context = useContext(AuthContext);
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState({});

  const inputHandler = event => {
    const value = event.target.value;
    setInput({ ...input, [event.target.name]: value });
  };

  const [registerUser, { loading }] = useMutation(REGISTER_USER, {
    update(_, result) {
      context.login(result.data.register);
      props.history.push("/");
    },
    onError({ graphQLErrors }) {
      setErrors(graphQLErrors[0].extensions.exception.errors);
    },
    variables: input
  });

  const submitHandler = event => {
    registerUser();
  };

  return (
    <div>
      <h1>Register</h1>
      <Box>
        <h2>Sign up today for free</h2>
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={inputHandler}
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={inputHandler}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={inputHandler}
        />
        <input
          type="password"
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
        <ul>
          {Object.values(errors).map(value => {
            return <li key={value}>{value}</li>;
          })}
        </ul>
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
