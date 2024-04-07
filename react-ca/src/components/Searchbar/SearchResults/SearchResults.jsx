import React from "react";
import { useNavigate } from "react-router-dom";

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
