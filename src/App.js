import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductList from './components/productList';
import Footer from './components/feature/Footer';
import AddProduct from './components/addProduct';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
