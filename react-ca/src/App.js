import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/Homepage/Homepage';
import Layout from './components/Layout/Layout';
import ContactPage from './components/ContactPage/ContactPage';
import ProductPage from './components/ProductPage/ProductPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
    </Layout>
  );
}

export default App;