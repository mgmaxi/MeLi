import React, { useState } from 'react';
import { getProducts } from '../../services/Products';
import './products.css';
import Header from '../../components/Header/Header';
import ProductCard from '../../components/ProductCard/ProductCard';
import SearchNotFound from '../../components/SearchNotFound/SearchNotFound';

const Products = () => {
  const [productList, setProductList] = useState([]);

  function handleSubmit(query) {
    const fetchData = async () => {
      try {
        const response = await getProducts(query);
        setProductList(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }

  return (
    <>
      <Header onHandleSubmit={handleSubmit} />
      <main>
        <div className="product-list-container">
          {productList.length === 0 ? (
            <SearchNotFound />
          ) : (
            productList.map((product) => {
              return <ProductCard product={product} />;
            })
          )}
        </div>
      </main>
    </>
  );
};

export default Products;
