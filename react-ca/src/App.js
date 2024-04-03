import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/Homepage/Homepage';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}

export default App;