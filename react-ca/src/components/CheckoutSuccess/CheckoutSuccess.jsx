import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./CheckoutSuccess.scss";

/**
 * Displays a confirmation message for a successful checkout process and provides a link
 * to return to the store's main page. It also clears the shopping cart upon component
 * mounting to reset the cart state for future purchases.
 *
 * Utilizes the "useCart" hook to access the "clearCart" method from the cart context,
 * ensuring the cart is emptied when a user reaches this success page.
 *
 * @returns {React.ReactElement} The checkout success confirmation page content, including
 * a message about successful order placement and a link back to the store.
 *
 * @example
 * return <CheckoutSuccess />;
 */

const CheckoutSuccess = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="checkout-success-container">
      <h2>Checkout Successful!</h2>
      <p>Your order has been placed successfully.</p>
      <Link to="/" className="back-to-store-link">
        Back to Store
      </Link>
    </div>
  );
};

export default CheckoutSuccess;
