import React from 'react';
import './App.css';
import Home from './screens/Home/Home.js';
import Products from './screens/Products/Products';
import ProductDetail from './screens/ProductDetail/ProductDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="items" element={<Products />} />
          <Route path="items/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

