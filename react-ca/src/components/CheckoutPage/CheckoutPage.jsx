import React from "react";
import { useCart } from "../../context/CartContext";
import CartItem from "./CartItem/CartItem"; 
import useCheckout from "./Hooks/Checkout"; 
import "./CheckoutPage.scss";

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();
  const { handleCheckout } = useCheckout(clearCart);

  const totalPrice = cart.reduce(
    (total, product) => total + product.discountedPrice,
    0
  );

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </ul>
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <button onClick={handleCheckout} aria-label="Complete checkout">Checkout</button>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;

