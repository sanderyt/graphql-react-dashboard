import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";

import Spinner from "../components/Spinner";
import Box from "../components/Box";

const SinglePost = props => {
  const postId = props.match.params.postId;

  const { loading, error, data } = useQuery(GET_POST, {
    variables: {
      postId
    }
  });

  if (loading) return <Spinner />;

  if (error) return <h3>Could not load post...</h3>;

  if (data) {
    return (
      <div>
        <Box>
          <h2>Post by {data.getPost.username}</h2>
          {data.getPost.body}
          <h3>
            <FontAwesomeIcon icon={faComments} /> Comments (
            {data.getPost.commentCount})
          </h3>
          <div className="single-post-comments">
            <h3>Add a comment</h3>
            <textarea rows={6} placeholder="Write your comment" />
            <button className="btn">Add comment</button>
          </div>
        </Box>
      </div>
    );
  }
};

const GET_POST = gql`
  query getPost($postId: ID!) {
    getPost(postId: $postId) {
      id
      body
      createdAt
      username
      comments {
        id
        createdAt
        username
        body
      }
      likes {
        id
        createdAt
        username
      }
      likeCount
      commentCount
    }
  }
`;

export default SinglePost;
