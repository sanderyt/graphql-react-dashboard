import React from "react";

const Card = ({
  card: { id, body, commentCount, likeCount, username, createdAt }
}) => {
  return (
    <div className="card">
      <h2>{id}</h2>
      <div>{body}</div>
      <p>Commentcount: {commentCount}</p>
      <p>Likecount: {likeCount}</p>
      <p>Made by: {username}</p>
      <p>Created at: {createdAt}</p>
    </div>
  );
};

export default Card;
