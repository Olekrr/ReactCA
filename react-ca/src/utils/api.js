const baseUrl = "https://v2.api.noroff.dev/online-shop";

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
        console.error(`Problem fetching ${productId ? "product" : "products"}:`, error);
        return productId ? null : [];
    }
};
