import React from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./CheckoutPage.scss";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart();
  const totalPrice = cart.reduce(
    (total, product) => total + product.discountedPrice,
    0
  );

  const handleCheckout = () => {
    clearCart();
    navigate("/checkout-success");
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((product, index) => (
              <li key={index}>
                {product.title} - ${product.discountedPrice.toFixed(2)}
              </li>
            ))}
          </ul>
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <button onClick={handleCheckout}>Checkout</button>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;

