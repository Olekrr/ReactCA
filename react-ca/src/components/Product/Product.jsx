import React from "react";
import { Link } from "react-router-dom";
import "./Product.scss";

/**
 * Displays a product card, including its image, title, description,
 * price, and a link to view more details.
 *
 * @param {Object} props - Component props.
 * @param {string} props.id - The unique identifier for the product, used to generate the product view link.
 * @param {string} props.title - The title of the product.
 * @param {string} props.description - A brief description of the product.
 * @param {{ url: string }} props.image - The product image object containing the URL.
 * @param {number} props.price - The price of the product.
 *
 * @returns {React.ReactElement} A `div` element structured as a product card.
 */

const Product = ({ id, title, description, image, price }) => {
  return (
    <div className="product-card">
      <img src={image.url} alt={title} className="product-image" />
      <div className="product-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Price: ${price}</p>
        <Link to={`/product/${id}`} className="view-product-btn">
          View Product
        </Link>
      </div>
    </div>
  );
};

export default Product;
