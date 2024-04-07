import { useState, useEffect } from "react";
import { fetchProducts } from "../../../utils/api";

/**
 * Custom hook for fetching products from an API. It manages the loading state,
 * handles errors, and stores the fetched products. Designed to be used by components
 * that display lists or grids of products.
 *
 * @returns {Object} An object containing:
 * - "products": An array of product objects fetched from the API.
 * - "error": An error object if an error occurred during fetching, otherwise "null".
 * - "loading": A boolean indicating whether the product fetch operation is in progress.
 */

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await fetchProducts();
        setProducts(response);
        setError(null);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  return { products, error, loading };
};

export default useProducts;
