import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import CartIcon from "../CartIcon/CartIcon.jsx";

const Header = () => {
  return (
    <header>
      <nav className="navbar" aria-label="Main navigation">
        <Link to="/" aria-label="Home page">Home</Link>
        <Link to="/contact" aria-label="Contact page">Contact</Link>
      </nav>
      <CartIcon /> 
    </header>
  );
};

export default Header;
