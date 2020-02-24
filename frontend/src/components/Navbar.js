import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="navbar">
        <Link to="/">
          <h2>React app</h2>
        </Link>
        <Link to="/login">
          <button className="btn">Login</button>
        </Link>
        <Link to="/register">
          <button className="btn btn--cta">Register</button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
