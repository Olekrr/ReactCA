import React, { useState } from "react";
import useDebounce from "./Hooks/Debounce"; 
import SearchResultItem from "./SearchResults/SearchResults"; 
import "./Searchbar.scss";

const SearchBar = ({ products }) => {
  const [searchInput, setSearchInput] = useState("");
  const debouncedSearchInput = useDebounce(searchInput, 100); 

  const filteredProducts = debouncedSearchInput
    ? products.filter((product) =>
        product.title.toLowerCase().includes(debouncedSearchInput.toLowerCase())
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
          {filteredProducts.slice(0, 10).map((product) => (
            <SearchResultItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
