import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext'; 
import { BiCart } from 'react-icons/bi';
import './CartIcon.scss';

const CartIcon = () => {
  const navigate = useNavigate();
  const { cart } = useCart(); 
  const itemCount = cart.reduce((total, product) => total + 1, 0); 

  return (
    <div className="cart-icon" onClick={() => navigate('/checkout')}> 
      <BiCart className="cart-icon-svg" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartIcon;
