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
function App() {
  // Simple mobile-only redirect
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  if (!isMobile) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        This website is accessible only on mobile devices.
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
