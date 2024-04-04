import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../../utils/api';
import Product from '../Product/Product';
import SearchBar from '../Searchbar/Searchbar';
import "./Homepage.scss"

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetchProducts();
        setProducts(response);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  
    getProducts();
  }, []);
  

  return (
    <div className="home-page">
       <SearchBar products={products} />
      <div className="product-grid">
        {products.map(product => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
