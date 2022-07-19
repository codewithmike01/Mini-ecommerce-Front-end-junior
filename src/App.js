import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductList from './components/productList';
import Header from './components/feature/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
      </Routes>
    </div>
  );
}

export default App;
