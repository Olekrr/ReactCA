import { useNavigate } from "react-router-dom";

const useCheckout = (clearCart) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    clearCart();
    navigate("/checkout-success");
  };

  return { handleCheckout };
};

export default useCheckout;
