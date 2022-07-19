import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductList from './components/productList';
import Header from './components/feature/Header';
import Footer from './components/feature/Footer';
import AddProduct from './components/addProduct/Index';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
