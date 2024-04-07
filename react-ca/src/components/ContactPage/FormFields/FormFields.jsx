import React from "react";

/**
 * Renders a form field with dynamic input types including text and textarea.
 *
 * @param {Object} props The properties passed to the form field component.
 * @param {string} props.label The label text for the form field.
 * @param {string} props.id The unique identifier for the form field, related to its label.
 * @param {string} props.name The name attribute of the form field, specifying the form data key.
 * @param {string} props.type The type of form field to render (`text` or `textarea`).
 * @param {string} props.value The current value of the form field, used for controlled inputs.
 * @param {function} props.onChange The function to call when the value of the form field changes.
 * @param {boolean} props.required Indicates if the form field is required.
 * @param {number} [props.minLength] The minimum length required for the form field value.
 *
 * @returns {React.ReactElement} A form field component with label and input or textarea.
 */

const FormField = ({
  label,
  id,
  name,
  type,
  value,
  onChange,
  required,
  minLength,
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
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
