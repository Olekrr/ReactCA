import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Searchbar.scss";

const SearchBar = ({ products }) => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const filteredProducts =
    searchInput.length > 0
      ? products.filter((product) =>
          product.title.toLowerCase().includes(searchInput.toLowerCase())
        )
      : [];

  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search products..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        aria-label="Search products"
      />
      {filteredProducts.length > 0 && (
        <div className="search-results">
          {filteredProducts.slice(0, 5).map((product) => (
            <div
              key={product.id}
              className="search-result-item"
              onClick={() => navigate(`/product/${product.id}`)}
              tabIndex="0"
              onKeyPress={(e) =>
                e.key === "Enter" && navigate(`/product/${product.id}`)
              }
              aria-label={`View ${product.title}`}
            >
              {product.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
