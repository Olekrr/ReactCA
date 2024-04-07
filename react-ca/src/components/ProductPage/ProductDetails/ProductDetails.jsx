import React from "react";
import "../ProductPage.scss";

/**
 * Displays detailed information about a product, including its image, title, description,
 * price, and a button to add the product to the shopping cart.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.product - The product object to display.
 * @param {Function} props.onAddToCart - Function to call when adding the product to the cart.
 *
 * @returns {React.ReactElement} A section with product details and an "Add to Cart" button.
 */

const ProductDetails = ({ product, onAddToCart }) => {
  const imageUrl = product.image ? product.image.url : "";
  const hasDiscount = product.discountedPrice < product.price;
  const discountPercentage = hasDiscount
    ? ((product.price - product.discountedPrice) / product.price) * 100
    : 0;

  return (
    <>
      <h2>{product.title}</h2>
      <img src={imageUrl} alt={product.title} />
      <p>{product.description}</p>
      <p>
        Price: ${product.discountedPrice}
        {hasDiscount && (
          <span>
            {" "}
            (Discount: {discountPercentage.toFixed(2)}%, Original Price: $
            {product.price})
          </span>
        )}
      </p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </>
  );
};

export default ProductDetails;
