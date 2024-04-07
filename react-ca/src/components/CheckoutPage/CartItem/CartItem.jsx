import React from "react";

const CartItem = ({ product }) => (
  <li>
    {product.title} - ${product.discountedPrice.toFixed(2)}
  </li>
);

export default CartItem;
