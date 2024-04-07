import { useCart } from "../../../context/CartContext";

const useCartActions = () => {
  const { cart, addToCart } = useCart();

  const addItemToCart = (product) => {
    addToCart(product);
  };

  const isProductInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  return { addItemToCart, isProductInCart };
};

export default useCartActions;
