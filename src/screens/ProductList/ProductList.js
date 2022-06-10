import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Product from '../../components/Product/Product';
import './productList.css';
import { getProducts } from '../../services/Products';

const Products = () => {
  const [productList, setProductList] = useState();

  function handleSubmit(query) {
    const fetchData = async () => {
      try {
        const response = await getProducts(query);
        setProductList(response.data.results);
        console.log(productList);
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
          {!productList
            ? 'No hay productos para mostrar..'
            : productList.map((product) => {
                return <Product product={product} />;
              })}
        </div>
      </main>
    </>
  );
};

export default Products;
