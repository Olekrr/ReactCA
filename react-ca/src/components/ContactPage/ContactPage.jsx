import React, { useState } from "react";
import "./ContactPage.scss"; 

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container"> 
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form"> 
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            minLength="3"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">
            Subject
          </label>
          <input
            type="text"
            className="form-control"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            minLength="3"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="body"
            name="body"
            rows="3"
            value={formData.body}
            onChange={handleChange}
            required
            minLength="3"
          ></textarea>
        </div>
        <div className="button-container">
          <button type="submit" className="btn btn-primary custom-button-width">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
