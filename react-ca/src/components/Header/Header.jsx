import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import CartIcon from '../CartIcon/CartIcon.jsx';

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <CartIcon /> 
    </header>
  );
};

export default Header;
