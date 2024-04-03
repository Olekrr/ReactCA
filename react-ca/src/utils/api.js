const baseUrl = "https://v2.api.noroff.dev/online-shop";

export const fetchProducts = async () => {
    try{
        const response = await fetch (`${baseUrl}`)
        if (!response.ok){
            throw new Error("Unable to fetch")
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Problem fetching products:", error);
    };
};