import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductList from './components/productList';
import Footer from './components/feature/Footer';
import AddProduct from './components/addProduct/Index';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
