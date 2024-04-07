import React from "react";

const FormField = ({ label, id, name, type, value, onChange, required, minLength }) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">{label}</label>
      {type === "textarea" ? (
        <textarea
          className="form-control"
          id={id}
          name={name}
          rows="3"
          value={value}
          onChange={onChange}
          required={required}
          minLength={minLength || undefined}
        ></textarea>
      ) : (
        <input
          type={type}
          className="form-control"
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          minLength={minLength || undefined}
        />
      )}
    </div>
  );
};

export default FormField;
