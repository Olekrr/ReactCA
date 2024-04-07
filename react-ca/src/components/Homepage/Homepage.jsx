import React from "react";
import useProducts from "./Hooks/Products";
import Product from "../Product/Product";
import SearchBar from "../Searchbar/Searchbar";
import "./Homepage.scss";

/**
 * The HomePage component serves as the landing page of the site, showcasing available products.
 * It utilizes the "useProducts" hook to fetch products asynchronously and displays them once loaded.
 *
 * @returns {React.ReactElement} The HomePage component structure, including a search bar,
 * a grid of product cards, or messages for loading and error states.
 */

const HomePage = () => {
  const { products, error, loading } = useProducts();

  if (loading) {
    return (
      <div className="loading-container">
        <p>Loading products...</p>
      </div>
    );
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
