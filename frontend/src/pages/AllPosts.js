import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Card from "../components/Card";

const AllPosts = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  return (
    <div>
      <h1>Overview of all posts</h1>
      {loading && <h2>Loading data..</h2>}
      {data &&
        data.getPosts.map(post => {
          return <Card card={post} />;
        })}
    </div>
  );
};

const GET_POSTS = gql`
  query {
    getPosts {
      id
      body
      createdAt
      username
      likeCount
      commentCount
    }
  }
`;

export default AllPosts;
