import React, { useState } from "react";
import Box from "../components/Box";
import Modal from "../components/Modal";
import MessageCard from "../components/MessageCard";
import Spinner from "../components/Spinner";

const Elements = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [messageConfirm, setMessageConfirm] = useState(false);
  return (
    <div>
      <h2>Component library</h2>
      <p>
        This is a component library made by Sander van Rijsoort. To get better
        at building React components, I have built my very own components.
      </p>
      <p>
        Interested in using these components? You can use them for free, just
        fork them from my repo and give me a star. :)
      </p>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h2>Box</h2>
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
      <p>Create a loading spinner button, put the buttons in a component</p>
      <h2>Modal</h2>
      <button className="btn" onClick={() => setModalOpen(true)}>
        Open modal
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
        onOpen={messageConfirm} //boolean that will trigger the message card
        onClose={() => setMessageConfirm(false)}
        onSuccess={true}
        callback={() => setMessageConfirm(false)}
      >
        <p>You can wrap your message in here.</p>
      </MessageCard>
      <button className="btn btn--cta" onClick={() => setMessageConfirm(true)}>
        Success
      </button>
      <button className="btn btn--logout">Failure</button>
      <h2>Loading spinners</h2>
      <Spinner />
    </div>
  );
};

export default Elements;
