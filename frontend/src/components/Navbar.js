import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ReactLogo from "../images/logo192.png";
import GraphQlLogo from "../images/graphql.png";

import { AuthContext } from "../context/auth";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <header>
      <div className="navbar">
        <div className="navbar__logo">
          <img src={ReactLogo} alt="react-logo" className="logo" />
          <img src={GraphQlLogo} alt="logo" className="logo" />
          <Link to="/admin">
            <h2>React/GraphQL App</h2>
          </Link>
        </div>
        <div className="navbar__actions">
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
      </div>
    </header>
  );
};

export default Navbar;
