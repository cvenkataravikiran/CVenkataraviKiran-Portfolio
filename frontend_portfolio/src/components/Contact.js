import React, { useContext, useRef, useState } from "react";
import { ThemeContext } from "../ThemeContext";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: null,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({
          submitting: false,
          success: true,
          message: "Message sent successfully!",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({
          submitting: false,
          success: false,
          message: result?.error || "Failed to send message.",
        });
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatus({
        submitting: false,
        success: false,
        message: "Something went wrong. Please try again later.",
      });
    }
  };

  const formStyles = {
    input: {
      backgroundColor: theme.background,
      color: theme.text,
      border: `1px solid ${theme.border}`,
      padding: "10px",
      borderRadius: "5px",
      width: "100%",
      marginBottom: "1rem",
    },
    label: {
      color: theme.text,
      marginBottom: "0.3rem",
      display: "block",
      fontWeight: "500",
    },
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4" style={{ color: theme.text }}>
            Contact Us
          </h2>

          {status.message && (
            <div
              className={`alert ${
                status.success ? "alert-success" : "alert-danger"
              }`}
            >
              {status.message}
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit}>
            <label htmlFor="name" style={formStyles.label}>Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              style={formStyles.input}
              placeholder="Your name"
              required
            />

            <label htmlFor="email" style={formStyles.label}>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              style={formStyles.input}
              placeholder="Your email"
              required
            />

            <label htmlFor="message" style={formStyles.label}>Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              style={formStyles.input}
              placeholder="Your message"
              required
            />

            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={status.submitting}
              style={{
                backgroundColor: theme.primaryColor,
                border: "none",
                fontSize: "1.1rem",
                padding: "10px",
              }}
            >
              {status.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
