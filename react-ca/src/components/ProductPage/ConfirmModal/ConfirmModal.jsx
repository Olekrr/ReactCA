import React from "react";
import "../ProductPage.scss";

/**
 * A modal component that asks the user to confirm if they want to add an item to the cart
 * that is already present. It offers options to either confirm or cancel the action.
 *
 * @param {Object} props - Component props.
 * @param {boolean} props.isOpen - Controls the visibility of the modal.
 * @param {Function} props.onClose - Function to call when closing the modal.
 * @param {Function} props.onConfirm - Function to call when confirming the action.
 *
 * @returns {React.ReactElement|null} The ConfirmModal component if "isOpen" is true, otherwise "null".
 */

const ConfirmModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>This item is already in your cart. Do you want to add another?</p>
        <button className="modal-button" onClick={onConfirm}>
          Yes
        </button>
        <button className="modal-button" onClick={onClose}>
          No
        </button>
      </div>
    </div>
  );
};

export default ConfirmModal;
