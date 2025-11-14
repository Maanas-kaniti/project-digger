import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <img
          src="/logo.png"
          alt="Logo"
        />
      </Link>
    </nav>
  );
}

export default Navbar;
