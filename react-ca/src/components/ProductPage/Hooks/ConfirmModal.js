import { useState } from "react";

/**
 * Manages the state of the confirmation modal, providing functions to open, close,
 * and toggle the modal's visibility.
 *
 * @returns {Object} An object containing:
 * - `isModalOpen`: A boolean indicating if the modal is currently open.
 * - `openModal`: Function to open the modal.
 * - `closeModal`: Function to close the modal.
 * - `toggleModal`: Function to toggle the modal's open/close state.
 */

const useConfirmModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleModal = () => setIsModalOpen((prev) => !prev);

  return {
    isModalOpen,
    openModal,
    closeModal,
    toggleModal,
  };
};

export default useConfirmModal;
