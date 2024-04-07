import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * Renders an individual search result item. Clicking on the item or pressing Enter
 * navigates to the product's detail page.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.product - The product object for the search result item.
 * @returns {React.ReactElement} A clickable div for a single search result.
 */

const SearchResultItem = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      className="search-result-item"
      onClick={() => navigate(`/product/${product.id}`)}
      tabIndex="0"
      onKeyDown={(e) => e.key === "Enter" && navigate(`/product/${product.id}`)}
      aria-label={`View ${product.title}`}
    >
      {product.title}
    </div>
  );
};

export default SearchResultItem;
