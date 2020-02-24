import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo192.png";

const Navbar = () => {
  return (
    <header>
      <div className="navbar">
        <img src={Logo} className="navbar__logo" alt="logo" />
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
