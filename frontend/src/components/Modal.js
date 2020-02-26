import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import Backdrop from "./Backdrop";

const Modal = ({ children, title, onClose, open, footer }) => {
  return (
    <div>
      {open && (
        <Backdrop onClose={onClose}>
          <div className="modal">
            <div className="modal__header">
              <h2>{title}</h2>
              <FontAwesomeIcon icon={faTimes} onClick={onClose} />
            </div>
            <div className="modal__content">{children}</div>
            {footer && (
              <div className="modal__footer">
                <button className="btn btn--cta">Confirm</button>
              </div>
            )}
          </div>
        </Backdrop>
      )}
    </div>
  );
};

export default Modal;
