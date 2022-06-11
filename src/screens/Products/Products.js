import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getProducts } from '../../services/Products';
import './products.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProductCard from '../../components/ProductCard/ProductCard';
import SearchNotFound from '../../components/SearchNotFound/SearchNotFound';

const Products = () => {
  const [productList, setProductList] = useState([]);
  const { state } = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProducts(state.query);
        setProductList(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    state && fetchData();
  }, [state]);

  return (
    <>
      <Header />
      <main>
        <div className="product-list-container">
          {productList.length === 0 ? (
            <SearchNotFound />
          ) : (
            productList.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Products;
