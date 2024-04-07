import { useState } from "react";

/**
 * Provides functionality for triggering notifications with a message. Offers control over
 * the display state of notifications and automatically hides notifications after a specified duration.
 *
 * @param {number} [duration=3000] - Duration in milliseconds for which the notification should be displayed.
 *
 * @returns {Object} An object containing:
 * - "showNotification": A boolean indicating if a notification should be shown.
 * - "message": The message to be displayed in the notification.
 * - "triggerNotification": A function to trigger a new notification with a specified message.
 */

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
