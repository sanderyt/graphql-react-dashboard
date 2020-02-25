import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo192.png";

import { AuthContext } from "../context/auth";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <header>
      <div className="navbar">
        <img src={Logo} className="navbar__logo" alt="logo" />
        <Link to="/">
          <h2>React app</h2>
        </Link>
        {user && <h3>Welcome back, {user.username}</h3>}
        {user ? (
          <div>
            <button className="btn btn--logout" onClick={logout}>
              Logout
            </button>
          </div>
        ) : (
          <div>
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
            <Link to="/register">
              <button className="btn btn--cta">Register</button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
