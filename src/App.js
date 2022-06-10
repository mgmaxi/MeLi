import React from 'react';
import './App.css';
import Home from './screens/Home/Home.js';
import ProductList from './screens/ProductList/ProductList';
import ProductDetail from './screens/ProductDetail/ProductDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

