import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import CartIcon from "../CartIcon/CartIcon";

/**
 * Represents the site's header, including navigation links and the cart icon.
 * Provides navigation to the Home and Contact pages through link elements.
 *
 * @returns {React.ReactElement} The header component with navigation links and cart icon.
 */

const navLinks = [
  { path: "/", label: "Home", ariaLabel: "Home page" },
  { path: "/contact", label: "Contact", ariaLabel: "Contact page" },
];

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar" aria-label="Main navigation">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            className="nav-link"
            to={link.path}
            aria-label={link.ariaLabel}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="cart-icon-wrapper">
        <CartIcon />
      </div>
    </header>
  );
};

export default Header;
