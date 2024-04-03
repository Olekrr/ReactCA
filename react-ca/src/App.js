import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/Homepage/Homepage';
import Layout from './components/Layout/Layout';
import ContactPage from './components/ContactPage/ContactPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}

export default App;