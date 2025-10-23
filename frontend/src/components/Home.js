import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
function Home() {
  const navigate = useNavigate();
  return (
    <div
      style={{ textAlign: "center", padding: "" }}
      className="home-container"
    >
      <h1 className="home-title">Welcome to Project Digger</h1>
      <button onClick={() => navigate("/about")} className="home-button">
        Start
      </button>
    </div>
  );
}

export default Home;
