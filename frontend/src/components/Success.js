import React from "react";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Success.css";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="success-container">
      <div className="success-content">
        <div className="check-icon">
          <CheckCircle className="icon" />
        </div>
        <h1>Submission Successful!</h1>
        <p>
          Thank you for submitting your details. Our team will get back to you
          soon.
        </p>
        <button onClick={() => navigate("/")}>Go to Home</button>
      </div>
    </div>
  );
};

export default Success;
