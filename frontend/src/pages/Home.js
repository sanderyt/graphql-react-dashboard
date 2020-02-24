import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Card from "../components/Card";

const Home = () => {
  const { loading, data } = useQuery(FETCH_POSTS_QUERY);

  if (data) {
    console.log(data.getPosts, "data");
  }
  return (
    <div>
      {loading && <h1>Loading</h1>}
      {data && (
        <div>
          <h1>Loaded content</h1>
          {data.getPosts.map(post => {
            return <Card card={post} />;
          })}
        </div>
      )}
    </div>
  );
};

const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      body
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;

export default Home;
