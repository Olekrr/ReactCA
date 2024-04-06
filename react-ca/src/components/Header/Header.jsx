import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import CartIcon from "../CartIcon/CartIcon";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar" aria-label="Main navigation">
        <Link className="nav-link" to="/" aria-label="Home page">Home</Link>
        <Link className="nav-link" to="/contact" aria-label="Contact page">Contact</Link>
      </nav>
      <div className="cart-icon-wrapper">
        <CartIcon /> 
      </div>
    </header>
  );
};

export default Header;
