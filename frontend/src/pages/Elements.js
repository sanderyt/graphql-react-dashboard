import React, { useState } from "react";
import Box from "../components/Box";
import Modal from "../components/Modal";
import Backdrop from "../components/Backdrop";
import MessageCard from "../components/MessageCard";

const Elements = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [messageConfirm, setMessageConfirm] = useState(false);
  return (
    <div>
      <h2>Box element</h2>
      <Box>
        This is a box element. It will highlight some important content. Just
        wrap your content in it, and you are good to go.
      </Box>
      <Box>
        This is a box element. It will highlight some important content. Just
        wrap your content in it, and you are good to go.
      </Box>
      <Box>
        This is a box element. It will highlight some important content. Just
        wrap your content in it, and you are good to go.
      </Box>
      <Box>
        This is a box element. It will highlight some important content. Just
        wrap your content in it, and you are good to go.
      </Box>
      <h2>Buttons</h2>
      <button className="btn">Primary</button>
      <button className="btn btn--cta">Call-to-action</button>
      <button className="btn btn--loading">Disabled</button>
      <h2>Modals</h2>
      <button className="btn" onClick={() => setModalOpen(true)}>
        Open modal with footer
      </button>
      <Modal
        title="Are you sure?"
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        footer={true}
      >
        <p>
          Put some content inside this modal. Like a form, or if you want
          something to confirm. <b>Next to do for modal:</b>
        </p>
        <p>
          Put some content inside this modal. Like a form, or if you want
          something to confirm. <b>Next to do for modal:</b>
        </p>
        <p>
          Put some content inside this modal. Like a form, or if you want
          something to confirm. <b>Next to do for modal:</b>
        </p>
        <ul>
          <li>Add some animation to the backdrop</li>
          <li>Add some animation to the modal itself</li>
          <li>Add some props, like a footer with button</li>
          <li>
            Modal should ONLY close when clicked on backdrop or close icon
          </li>
        </ul>
      </Modal>
      <h2>Messages</h2>
      <MessageCard
        open={messageConfirm}
        onClose={() => setMessageConfirm(false)}
      >
        <ul>
          <li>Make it disappear after 4 seconds</li>
          <li>Some conditional styling and icons</li>
        </ul>
      </MessageCard>
      <button className="btn btn--cta" onClick={() => setMessageConfirm(true)}>
        Success
      </button>
      <button className="btn btn--logout">Failure</button>
    </div>
  );
};

export default Elements;
