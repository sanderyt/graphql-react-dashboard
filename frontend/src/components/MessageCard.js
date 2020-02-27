//Card that will show confirmation if event has succeeded/failed
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";

const MessageCard = ({ children, onOpen, onClose, onSuccess, callback }) => {
  useEffect(() => {
    if (onOpen) setTimeout(() => callback(), 5000);
  }, [onOpen]);

  return (
    <div
      className={onOpen ? "message-card actived" : "message-card"}
      style={onSuccess ? { borderTop: "5px solid #00b894" } : null}
    >
      <div className="message-card__close" onClick={onClose}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <div className="message-card__content">{children}</div>
    </div>
  );
};

export default MessageCard;
