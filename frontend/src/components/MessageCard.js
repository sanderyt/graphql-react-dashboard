//Card that will show confirmation if event has succeeded/failed
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";

const MessageCard = ({ children, open, onClose }) => {
  // const [message, setMessage] = useState(false);

  // const confirmMessage = boolean => {
  //   setMessage(!message);
  //   setSuccess(boolean);
  //   setTimeout(() => setMessage(false), 5000);
  // };

  return (
    <div className={open ? "message-card actived" : "message-card"}>
      <div className="message-card__close" onClick={onClose}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default MessageCard;
