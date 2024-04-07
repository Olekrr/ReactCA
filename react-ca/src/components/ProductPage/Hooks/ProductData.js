import { useState, useEffect } from "react";
import { fetchProducts } from "../../../utils/api";

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
