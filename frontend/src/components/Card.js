import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Card = ({ card: { body, id, commentCount, likeCount, username } }) => {
  return (
    <div className="card">
      <div className="card__content">
        <p>{body}</p>
        <p class="gray">by {username}</p>
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
      </div>
    </div>
  );
};

export default Card;
