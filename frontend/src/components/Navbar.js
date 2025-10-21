import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#fff",
        padding: "10px 20px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <img
          src="/logo.png" // place your logo image in public/logo.png
          alt="Logo"
          style={{ height: "40px", cursor: "pointer" }}
        />
      </Link>
    </nav>
  );
}

export default Navbar;
