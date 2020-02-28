import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Box from "../components/Box";
import MessageCard from "../components/MessageCard";
import { useForm } from "../util/hooks";

const AddPost = () => {
  const [addedPost, setAddedPost] = useState(false);
  const { values, onChange, onSubmit } = useForm(createPostCallback, {
    body: ""
  });

  const [createPost, { error }] = useMutation(CREATE_POST, {
    variables: values,
    update(_, result) {
      setAddedPost(true);
    },
    onError({ graphQLErrors }) {
      console.log(graphQLErrors);
    }
  });

  function createPostCallback() {
    createPost();
  }

  return (
    <div>
      <h1>Add new post</h1>
      <Box>
        <textarea
          type="text"
          name="body"
          placeholder="What is on your mind?"
          rows="12"
          onChange={onChange}
        />
        <button className="btn btn--cta" onClick={onSubmit}>
          Add post
        </button>
      </Box>
      <MessageCard
        onActivate={addedPost}
        onClose={() => setAddedPost(false)}
        onSuccess={true}
        callback={() => setAddedPost(false)}
      >
        <p>You succesfully added a new post!</p>
      </MessageCard>
    </div>
  );
};

const CREATE_POST = gql`
  mutation createPost($body: String!) {
    createPost(body: $body) {
      id
      body
      createdAt
      username
      likes {
        id
        username
        createdAt
      }
      comments {
        id
        body
        username
        createdAt
      }
      commentCount
      likeCount
    }
  }
`;

export default AddPost;
