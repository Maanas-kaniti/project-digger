import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

function About() {
  const navigate = useNavigate();

  const whatWeDo = [
    "Assist students and professionals with academic and technical projects",
    "Provide expert support in multiple domains",
    "Offer quick response and direct communication",
    "Ensure quality, timely delivery, and transparent pricing",
  ];

  const whyChooseUs = [
    "Easy mobile-first experience",
    "Simple request submission",
    "Direct contact from our team within 24 hours",
    "Support for a wide range of project domains",
    "Flexible pricing based on complexity and timeline",
  ];

  return (
    <div className="about-container">
      <section className="about-section">
        <h1 className="about-heading">About Project Digger</h1>
        <p className="about-text">
          Project Digger is a platform designed to connect individuals who need
          help completing their projects with a team of skilled developers.
          Whether it's a college assignment, a mini project, a website, an
          application, or any technical task, Project Digger makes it easy for
          users to submit their requirements and get support.
        </p>
        <p className="about-text">
          Our goal is to make project assistance simple, fast, and reliable.
          Users can choose their domain, submit the details through a quick form,
          and our team will reach out to discuss the scope, timeline, and
          pricing. Every project is handled with care, professionalism, and
          confidentiality.
        </p>
      </section>

      <section className="about-section">
        <h2 className="about-subheading">What We Do</h2>
        <div className="about-list">
          {whatWeDo.map((item, index) => (
            <div key={index} className="about-list-item">
              <span className="about-checkmark">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section">
        <h2 className="about-subheading">Why Choose Us</h2>
        <div className="about-list">
          {whyChooseUs.map((item, index) => (
            <div key={index} className="about-list-item">
              <span className="about-checkmark">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section">
        <p className="about-text about-conclusion">
          Project Digger is built to make project handling smoother for
          everyone — delivering the right guidance, at the right time, in the
          simplest way possible.
        </p>
      </section>

      <button onClick={() => navigate("/domains")} className="continue-button">
        Get Started
      </button>
    </div>
  );
}

export default About;
