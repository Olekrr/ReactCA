import { useCart } from "../../../context/CartContext";

/**
 * Provides actions related to cart functionality, such as adding items to the cart
 * and checking if a product is already in the cart.
 *
 * Utilizes the "useCart" context to interact with the cart's state.
 *
 * @returns {Object} An object containing functions to manipulate and check the cart's contents:
 * - "addItemToCart": Adds a specified product to the cart.
 * - "isProductInCart": Checks if a specified product is already in the cart.
 */

const useCartActions = () => {
  const { cart, addToCart } = useCart();

  const addItemToCart = (product) => {
    addToCart(product);
  };

  const isProductInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  return { addItemToCart, isProductInCart };
};

export default useCartActions;
