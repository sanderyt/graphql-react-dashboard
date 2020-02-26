import React, { useEffect } from "react";

const Backdrop = ({ children, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  return (
    <div className="backdrop" onClick={onClose}>
      {children}
    </div>
  );
};

export default Backdrop;
