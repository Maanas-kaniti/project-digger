import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import DomainSelection from "./components/DomainSelection";
import FormPage from "./components/FormPage";
import Success from "./components/Success";
import About from "./components/About";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  // Simple mobile-only redirect
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  if (!isMobile) {
    return (
      <div className="desktop-warning">
        <div className="desktop-warning-content">
          <div className="desktop-warning-icon">📱</div>
          <h1>Mobile View Only</h1>
          <p>
            This website is optimized for mobile devices. Please open it on your
            phone or tablet for the best experience.
          </p>
          <p className="desktop-warning-subtext">
            Switch to a mobile device to continue.
          </p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/domains" element={<DomainSelection />} />

        <Route path="/form/:domain" element={<FormPage />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
