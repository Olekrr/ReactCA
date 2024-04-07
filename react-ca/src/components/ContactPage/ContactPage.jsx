import React from "react";
import useForm from "./Hooks/Form";
import FormField from "./FormFields/FormFields";
import "./ContactPage.scss";

const ContactPage = () => {
  const initialValues = {
    fullName: "",
    subject: "",
    email: "",
    body: "",
  };

  const { formData, handleChange, resetForm } = useForm(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    resetForm();
  };

  return (
    <div className="container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <FormField
          label="Full Name"
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          minLength="3"
        />
        <FormField
          label="Subject"
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          minLength="3"
        />
        <FormField
          label="Email"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <FormField
          label="Message"
          type="textarea"
          id="body"
          name="body"
          value={formData.body}
          onChange={handleChange}
          required
          minLength="3"
        />
        <div className="button-container">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
