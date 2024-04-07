import { useState } from "react";

const useNotification = (duration = 3000) => {
  const [showNotification, setShowNotification] = useState(false);
  const [message, setMessage] = useState("");

  const triggerNotification = (msg) => {
    setMessage(msg);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), duration);
  };

  return { showNotification, message, triggerNotification };
};

export default useNotification;
