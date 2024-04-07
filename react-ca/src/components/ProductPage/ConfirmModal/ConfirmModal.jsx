import React from "react";
import "../ProductPage.scss"; 

const ConfirmModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>This item is already in your cart. Do you want to add another?</p>
        <button className="modal-button" onClick={onConfirm}>Yes</button>
        <button className="modal-button" onClick={onClose}>No</button>
      </div>
    </div>
  );
};

export default ConfirmModal;
