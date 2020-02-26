import React, { useState } from "react";
import Box from "../components/Box";
import Modal from "../components/Modal";
import Backdrop from "../components/Backdrop";

const Elements = () => {
  const [open, setOpen] = useState(false);
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
      <button className="btn" onClick={() => setOpen(true)}>
        Open modal without footer
      </button>
      <button className="btn" onClick={() => setOpen(true)}>
        Open modal with footer
      </button>
      <Modal
        title="Are you sure?"
        open={open}
        onClose={() => setOpen(false)}
        footer={false}
      >
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
      <Modal
        title="Are you sure?"
        open={open}
        onClose={() => setOpen(false)}
        footer={true}
      >
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
      <button className="btn btn--cta">Success</button>
      <button className="btn btn--logout">Failure</button>
    </div>
  );
};

export default Elements;
