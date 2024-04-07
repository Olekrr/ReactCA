import React from "react";
import "../ProductPage.scss"; 

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
          <span> (Discount: {discountPercentage.toFixed(2)}%, Original Price: ${product.price})</span>
        )}
      </p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </>
  );
};

export default ProductDetails;
