import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./FormPage.css";
function FormPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();
  const { domain } = useParams();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent double clicks

    setIsSubmitting(true);
    try {
      const res = await axios.post(
        "https://project-digger.onrender.com/submit",
        {
          ...formData,
          domain,
        }
      );
      if (res.status === 200) {
        navigate("/success"); // smooth client-side routing
      } else {
        alert("Submission failed. Please try again.");
        setIsSubmitting(false);
      }
    } catch (error) {
      alert("Something went wrong. Check your backend or form data.");
      console.error(error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-heading">{domain} Domain Form</h2>
      <div className="divider"></div>

      <form className="form-content" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Phone</label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default FormPage;
