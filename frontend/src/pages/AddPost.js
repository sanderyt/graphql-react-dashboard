import React from "react";

import Box from "../components/Box";

const AddPost = () => {
  return (
    <div>
      <h1>Add new post</h1>
      <Box>
        <input type="text" name="title" placeholder="Title" />
        <button className="btn btn--cta">Add post</button>
      </Box>
    </div>
  );
};

export default AddPost;
