import React from "react";

/**
 * Displays an item in the shopping cart, showing the product's title and its discounted price.
 *
 * @param {{ product: { title: string, discountedPrice: number } }} props - The props object containing the product to display.
 * @returns {React.ReactElement} An `<li>` element representing the cart item, including the product's title and formatted discounted price.
 *
 * @example
 * const product = { title: "Sweet Gadget", discountedPrice: 99.99 };
 * <CartItem product={product} />
 */

const CartItem = ({ product }) => (
  <li>
    {product.title} - ${product.discountedPrice.toFixed(2)}
  </li>
);

export default CartItem;
