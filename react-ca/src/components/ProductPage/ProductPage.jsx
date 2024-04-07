import React from "react";
import { useParams } from "react-router-dom";
import useProductData from "./Hooks/ProductData";
import useCartActions from "./Hooks/CartActions";
import useNotification from "./Hooks/Notifications";
import useConfirmModal from "./Hooks/ConfirmModal";
import ConfirmModal from "./ConfirmModal/ConfirmModal";
import ProductDetails from "./ProductDetails/ProductDetails";
import ReviewsSection from "./ReviewsSection/ReviewsSection";
import "./ProductPage.scss";

/**
 * The main page for displaying a single product's details, including an option to add
 * the product to the cart, and viewing reviews. It also handles notifications and confirmation
 * modals related to cart actions.
 *
 * @returns {React.ReactElement} The Product Page, composed of the product details, reviews,
 * confirmation modal and notification messages.
 */

const ProductPage = () => {
  const { productId } = useParams();
  const { product, error } = useProductData(productId);
  const { addItemToCart, isProductInCart } = useCartActions();
  const { showNotification, message, triggerNotification } = useNotification();
  const { isModalOpen, openModal, closeModal } = useConfirmModal();

  const handleAddToCart = () => {
    if (isProductInCart(product?.id)) {
      openModal();
    } else {
      addItemToCart(product);
      triggerNotification(`Added "${product.title}" to cart!`);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Loading product...</div>;
  }

  return (
    <div className="product-page-container">
      <ConfirmModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={() => {
          addItemToCart(product);
          closeModal();
          triggerNotification(`Added "${product.title}" to cart!`);
        }}
        productName={product.title}
      />
      <ProductDetails product={product} onAddToCart={handleAddToCart} />
      {showNotification && <div className="notification">{message}</div>}
      {product.reviews && product.reviews.length > 0 && (
        <ReviewsSection reviews={product.reviews} />
      )}
    </div>
  );
};

export default ProductPage;
