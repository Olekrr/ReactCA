import { useNavigate } from "react-router-dom";

/**
 * Provides checkout handling functionality. It clears the shopping cart
 * and navigates the user to a "checkout-success" page upon successful checkout.
 *
 * @param {Function} clearCart - Function to clear the shopping cart. This function is
 * provided by the "useCart" context, so the cart's state is managed centrally.
 *
 * @returns {Object} An object containing the "handleCheckout" method. When invoked,
 * it clears the cart and navigates to the checkout success page.
 *
 *
 * @example
 * const { handleCheckout } = useCheckout(clearCart);
 * // Usage within a button click event:
 * <button onClick={handleCheckout}>Complete Checkout</button>
 */

const useCheckout = (clearCart) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    clearCart();
    navigate("/checkout-success");
  };

  return { handleCheckout };
};

export default useCheckout;
