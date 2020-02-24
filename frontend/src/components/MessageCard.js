//Card that will show confirmation if event has succeeded/failed
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";

const MessageCard = ({ children, onActivate, onSuccess, onClose }) => {
  const [message, setMessage] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <div className={onActivate ? "message-card actived" : "message-card"}>
      <div className="message-card__close" onClick={onClose}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <div className={onSuccess ? "success" : "error"}>
        {onSuccess ? (
          <FontAwesomeIcon icon={faCheck} />
        ) : (
          <FontAwesomeIcon icon={faTimes} />
        )}
        {children}
      </div>
    </div>
  );
};

export default MessageCard;
