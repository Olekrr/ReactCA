import { useState } from "react";

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
