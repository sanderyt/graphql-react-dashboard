import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Box from "../components/Box";

const AddPost = () => {
  const [input, setInput] = useState({ body: "" });

  const inputHandler = event => {
    const value = event.target.value;
    setInput({ ...input, [event.target.name]: value });
  };

  const submitHandler = () => {
    console.log(input);
  };
  return (
    <div>
      <h1>Add new post</h1>
      <Box>
        <textarea
          type="text"
          name="body"
          placeholder="What is on your mind?"
          rows="12"
          onChange={inputHandler}
        />
        <button className="btn btn--cta" onClick={submitHandler}>
          Add post
        </button>
      </Box>
    </div>
  );
};

const CREATE_POST = gql`
  mutation {
    createPost(body: "sdsdsd") {
      id
      body
      createdAt
      username
      comments
      likes
      likes
      likeCount
      commentCount
    }
  }
`;

export default AddPost;
