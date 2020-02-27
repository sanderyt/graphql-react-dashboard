import React, { useContext } from "react";

import { AuthContext } from "../context/auth";
import Box from "../components/Box";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Box>
        <h1>Welcome, {user.username}</h1>
        <h2>To-do's:</h2>
        <ul>
          <li>Delete post and see it disappear</li>
          <li>Make that posts can get likes</li>
          <li>Make single post page</li>
          <li>Comments on the single page post</li>
          <li>Fix all other small issues</li>
        </ul>
        <h3>
          Next up: create cv creator software with graphql/react with automatic
          saving, just like resume.io
        </h3>
      </Box>
    </div>
  );
};

export default Dashboard;
