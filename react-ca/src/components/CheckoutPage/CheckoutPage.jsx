import React from 'react';
import { useCart } from '../../context/CartContext';

const CheckoutPage = () => {
  const { cart } = useCart();
  const totalPrice = cart.reduce((total, product) => total + product.discountedPrice, 0);

  return (
    <div>
      <h2>Checkout</h2>
      {cart.length === 0 && <p>Your cart is empty.</p>}
      <ul>
        {cart.map((product, index) => (
          <li key={index}>
            {product.title} - ${product.discountedPrice.toFixed(2)}
          </li>
        ))}
      </ul>
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
      <button onClick={() => alert('Checkout process here.')}>Checkout</button>
    </div>
  );
};

export default CheckoutPage;
