import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { BiCart } from "react-icons/bi";
import "./CartIcon.scss";

const CartIcon = () => {
  const navigate = useNavigate();
  const { cart } = useCart();
  const itemCount = cart.reduce((total, product) => total + 1, 0);

  return (
    <button className="cart-icon" onClick={() => navigate("/checkout")} aria-label="Go to checkout">
      <BiCart className="cart-icon-svg" />
      <span className="item-count">{itemCount}</span>
    </button>
  );
};

export default CartIcon;
