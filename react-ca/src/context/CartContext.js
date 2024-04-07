import React, { createContext, useContext, useState, useCallback } from "react";

const CartContext = createContext();

/**
 * Custom hook to access and interact with the cart's state.
 *
 * @returns {Object} The cart context value, which includes the cart array,
 * a method to add items to the cart ("addToCart"), and a method to clear the cart ("clearCart").
 */

export const useCart = () => useContext(CartContext);

/**
 * Provides the cart context to child components, allowing them to interact
 * with the cart's state. It initializes and manages the state of the shopping cart,
 * including adding items to the cart and clearing the cart.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - Child nodes to be rendered within the provider.
 *
 * @returns {React.ReactNode} The CartProvider component that provides cart context to its children.
 */

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  /**
   * Adds a product to the cart.
   *
   * @param {Object} product - The product to add to the cart.
   */

  const addToCart = useCallback((product) => {
    setCart((currentCart) => [...currentCart, product]);
  }, []);

  /**
   * Clears all products from the cart.
   */
  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
