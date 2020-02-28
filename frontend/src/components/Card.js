import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faThumbsUp,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { AuthContext } from "../context/auth";
import MessageCard from "../components/MessageCard";

const Card = ({ card: { body, id, commentCount, likeCount, username } }) => {
  const { user } = useContext(AuthContext);
  const [postDeleted, setPostDeleted] = useState(false);
  const [deletePost, { error }] = useMutation(DELETE_POST, {
    variables: {
      postId: id
    },
    update(proxy, result) {
      setPostDeleted(true);
    },
    onError({ graphQLErrors }) {
      console.log(graphQLErrors);
    }
  });

  return (
    <div className="card">
      <div className="card__content">
        <p>{body}</p>
        <p class="gray">
          by {user.username === username ? "myself" : username}
        </p>
      </div>
      <div className="card__actions">
        <div className="card__actions__item">
          <FontAwesomeIcon icon={faThumbsUp} />
          {likeCount} Like(s)
        </div>
        <Link to={`/admin/post/${id}`} className="card__actions__item">
          <FontAwesomeIcon icon={faComments} />
          Comments ({commentCount})
        </Link>
        {user.username === username && (
          <div className="card__actions__item--delete" onClick={deletePost}>
            <FontAwesomeIcon icon={faTrash} />
          </div>
        )}
      </div>
      <MessageCard
        isActivated={postDeleted}
        onClose={() => setPostDeleted(false)}
        onSuccess={true}
        callback={() => setPostDeleted(false)}
      >
        <p>You deleted your post.</p>
      </MessageCard>
    </div>
  );
};

export default Card;

const DELETE_POST = gql`
  mutation deletePost($postId: ID!) {
    deletePost(postId: $postId)
  }
`;
