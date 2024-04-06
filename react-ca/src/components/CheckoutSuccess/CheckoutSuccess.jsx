import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./CheckoutSuccess.scss";

const CheckoutSuccess = () => {
  const { clearCart } = useCart();

  React.useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="checkout-success-container">
      <h2>Checkout Successful!</h2>
      <p>Your order has been placed successfully.</p>
      <Link to="/">Back to Store</Link>
    </div>
  );
};

export default CheckoutSuccess;
