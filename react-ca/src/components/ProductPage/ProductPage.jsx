import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../../utils/api';

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetchProducts(productId);
        if (!response.data) {
          throw new Error('Product not found');
        }
        setProduct(response.data);
        setError(null);
      } catch (error) {
        setError(error.message);
      }
    };

    getProduct();
  }, [productId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Loading product...</div>;
  }

  const imageUrl = product.image ? product.image.url : '';
  const hasDiscount = product.discountedPrice < product.price;
  const discountPercentage = hasDiscount
    ? ((product.price - product.discountedPrice) / product.price) * 100
    : 0;
  
  return (
    <div>
      <h2>{product.title}</h2>
      <img src={imageUrl} alt={product.title} style={{ maxWidth: '100%', height: 'auto' }} />
      <p>{product.description}</p>
      <p>
        Price: ${product.discountedPrice}
        {hasDiscount && (
          <span> (Discount: {discountPercentage.toFixed(2)}%, Original Price: ${product.price})</span>
        )}
      </p>
      <button onClick={() => console.log(`Added ${product.title} to cart`)}>Add to Cart</button>
      {product.reviews && product.reviews.length > 0 && (
        <div>
          <h3>Reviews</h3>
          {product.reviews.map((review) => (
            <div key={review.id}>
              <p><strong>{review.username}</strong>: {review.description} - {review.rating} Stars</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductPage;

