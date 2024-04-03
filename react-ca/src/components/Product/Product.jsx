import React from 'react';
import { Link } from 'react-router-dom';
import './Product.scss'; 

const Product = ({ id, title, description, image, price }) => {
  return (
    <div className="product-card">
      <img src={image.url} alt={title} className="product-image" />
      <div className="product-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Price: ${price}</p>
        <Link to={`/product/${id}`} className="view-product-btn">View Product</Link>
      </div>
    </div>
  );
};

export default Product;
