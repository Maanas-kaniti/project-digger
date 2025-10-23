import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";
function About() {
  const navigate = useNavigate();
  return (
    <div
      style={{ padding: "20px", textAlign: "center" }}
      className="about-container"
    >
      <h2 className="about-heading">About Us</h2>
      <p className="about-text">
        Welcome to <strong>Project-digger</strong>. We’re a team Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Dolorem aliquid fuga animi
        corporis eaque maiores, dignissimos harum at fugit maxime! Fuga
        blanditiis sunt vero nostrum ipsa illum omnis at consequatur?
      </p>
      <p className="about-text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
        repellat libero earum odit saepe, suscipit, corporis nulla, vel deleniti
        odio rerum ad quidem nihil minima dolore! Necessitatibus, ab. Adipisci,
        animi?
      </p>
      <button onClick={() => navigate("/domains")} className="continue-button">
        Continue
      </button>
    </div>
  );
}

export default About;
