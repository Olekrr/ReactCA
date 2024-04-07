const baseUrl = "https://v2.api.noroff.dev/online-shop";

/**
 * Fetches products from the API. Can fetch all products or a single product by ID.
 *
 * This function communicates with a specific endpoint to retrieve product information.
 * It's designed to handle both: fetching all available products when no "productId" is provided,
 * and fetching a single product details when "productId" is specified.
 *
 * @param {string} [productId=""] - Optional. The unique identifier for a single product.
 * If not provided, the function fetches all products.
 * @returns {Promise<Object[]|Object|null>} - A promise that resolves to an array of product objects
 * when no "productId" is provided, a single product object when "productId" is specified,
 * or "null"/an empty array in case of an error.
 *
 * @example
 * // Fetch all products
 * const products = await fetchProducts();
 *
 * @example
 * // Fetch a single product by ID
 * const product = await fetchProducts("123");
 */

export const fetchProducts = async (productId = "") => {
  const url = productId ? `${baseUrl}/${productId}` : baseUrl;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Unable to fetch");
    }
    const data = await response.json();
    return productId ? data : data.data;
  } catch (error) {
    console.error(
      `Problem fetching ${productId ? "product" : "products"}:`,
      error
    );
    return productId ? null : [];
  }
};
