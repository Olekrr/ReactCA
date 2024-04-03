import React from 'react';
import { BiCart } from 'react-icons/bi';
import './CartIcon.scss';

const CartIcon = () => {
  // Placeholder count.
  const itemCount = 3;

  return (
    <div className="cart-icon">
      <BiCart className="cart-icon-svg" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartIcon;

