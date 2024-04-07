import React from "react";
import "./Footer.scss";

/**
 * Represents the site's footer. Displays the current year and a copyright notice.
 *
 * @returns {React.ReactElement} The footer component with copyright information.
 */

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} React CA </p>
    </footer>
  );
};
export default Footer;
