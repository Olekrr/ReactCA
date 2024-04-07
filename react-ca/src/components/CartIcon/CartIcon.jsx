import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { BiCart } from "react-icons/bi";
import "./CartIcon.scss";

/**
 * CartIcon component displays the shopping cart icon and count of items in the cart.
 * When clicked, navigates the user to the checkout page.
 *
 * Utilizes "useCart" context to access the current state of the cart.
 *
 * @component
 * @example
 * return (
 *   <CartIcon />
 * )
 */

const CartIcon = () => {
  const navigate = useNavigate();
  const { cart } = useCart();

  const itemCount = cart.reduce((total) => total + 1, 0);

  const handleNavigate = () => navigate("/checkout");

  return (
    <button
      className="cart-icon"
      onClick={handleNavigate}
      aria-label="Go to checkout"
    >
      <BiCart className="cart-icon-svg" />
      <span className="item-count">{itemCount}</span>
    </button>
  );
};

export default CartIcon;
