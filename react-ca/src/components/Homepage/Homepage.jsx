import React from "react";
import useProducts from "./Hooks/Products"; 
import Product from "../Product/Product";
import SearchBar from "../Searchbar/Searchbar";
import "./Homepage.scss";

const HomePage = () => {
  const { products, error, loading } = useProducts();

  if (loading) {
    return <div className="loading-container"><p>Loading products...</p></div>;
  }

  if (error) {
    return <p>Error fetching products.</p>;
  }

  return (
    <div className="home-page">
      <SearchBar products={products} />
      <div className="product-grid">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
