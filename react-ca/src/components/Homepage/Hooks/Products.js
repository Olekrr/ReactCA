import { useState, useEffect } from "react";
import { fetchProducts } from "../../../utils/api"; 

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
