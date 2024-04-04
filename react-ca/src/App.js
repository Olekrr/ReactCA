import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/Homepage/Homepage';
import Layout from './components/Layout/Layout';
import ContactPage from './components/ContactPage/ContactPage';
import ProductPage from './components/ProductPage/ProductPage';
import CheckoutPage from './components/CheckoutPage/CheckoutPage';
import { CartProvider } from './context/CartContext';

function App() {
  return (
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </Layout>
      </CartProvider>
  );
}

export default App;