import { useState, useEffect } from "react";
import { fetchProducts } from "../../../utils/api";

/**
 * Fetches and manages product data for a given product ID. Handles loading and error
 * states during the data fetch operation.
 *
 * @param {string} productId - The ID of the product to fetch data for.
 *
 * @returns {Object} An object containing:
 * - "product": The fetched product data or "null" if not fetched yet or on error.
 * - "error": An error object if an error occurred during fetching, otherwise "null".
 * - "loading": A boolean indicating whether the fetch operation is in progress.
 */

const useProductData = (productId) => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetchProducts(productId);
        if (!response.data) {
          throw new Error("Product not found");
        }
        setProduct(response.data);
        setError(null);
      } catch (error) {
        setError(error.message);
      }
    };

    getProduct();
  }, [productId]);

  return { product, error };
};

export default useProductData;
