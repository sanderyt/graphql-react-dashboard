import React from "react";
import Box from "../components/Box";

const Elements = () => {
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
      <button className="btn">Open modal</button>
      <h2>Messages</h2>
      <button className="btn btn--cta">Success</button>
      <button className="btn btn--logout">Failure</button>
    </div>
  );
};

export default Elements;
