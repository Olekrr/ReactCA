import { useState } from "react";

/**
 * Custom hook for form state management. It initializes form data, handles changes,
 * and resets form fields to their initial values.
 *
 * @param {Object} initialValues An object containing the initial values of the form fields.
 *
 * @returns {Object} An object containing "formData", "handleChange", and "resetForm":
 * - "formData": The current state of the form data.
 * - "handleChange": Function to update the form data based on input changes.
 * - "resetForm": Function to reset the form fields to their initial values.
 */

const useForm = (initialValues) => {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetForm = () => setFormData(initialValues);

  return { formData, handleChange, resetForm };
};

export default useForm;
