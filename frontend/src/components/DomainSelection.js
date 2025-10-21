import React from "react";
import { useNavigate } from "react-router-dom";
import "./DomainSelection.css";
function DomainSelection() {
  const navigate = useNavigate();
  const domains = [
    "VLSI",
    "Embedded",
    "IoT",
    "AI/ML",
    "Web",
    "Cybersecurity",
    "Automation",
  ]; // Example
  const [selectedDomain, setSelectedDomain] = React.useState(null);
  const handleSelect = (domain) => {
    setSelectedDomain(domain);
  };

  const handleProceed = () => {
    if (selectedDomain) {
      navigate(`/form/${selectedDomain}`);
    } else {
      alert("Please select a domain first.");
    }
  };
  return (
    <div style={{ padding: "" }} className="domain-container">
      <h2 className="domain-heading">Select your domain</h2>
      <div className="divider"></div>
      <div className="domain-grid">
        {domains.map((domain, index) => (
          <div
            key={index}
            className={`domain-card ${
              selectedDomain === domain ? "selected" : ""
            }`}
            onClick={() => handleSelect(domain)}
          >
            {domain}
          </div>
        ))}
      </div>
      <button
        className="proceed-button"
        onClick={handleProceed}
        disabled={!selectedDomain}
      >
        Proceed
      </button>
    </div>
  );
}

export default DomainSelection;
