import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getProducts } from '../../services/Products';
import './products.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProductCard from '../../components/ProductCard/ProductCard';
import SearchNotFound from '../../components/SearchNotFound/SearchNotFound';
import Filter from '../../components/Filter/Filter';

const Products = () => {
	const [productList, setProductList] = useState([]);
	const [productsFiltered, setProductsFiltered] = useState([]);
	const [query, setQuery] = useState();
	const { state } = useLocation();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getProducts(state.query);
				setProductList(response.data.results);
				setQuery(state);
			} catch (error) {
				console.log(error);
			}
		};
		state && fetchData();
	}, [state]);

	function filter(products) {
		setProductsFiltered(products);
	}

	return (
		<>
			<Header />
			<main>
				{productList.length === 0 ? (
					<SearchNotFound />
				) : (
					<>
						<Filter
							state={state.query}
							products={productList}
							onProductsFiltered={filter}
						/>
						<section className="product-list-container">
							{productsFiltered.length >= 1
								? productsFiltered.map(product => {
										return <ProductCard key={product.id} product={product} />;
								  })
								: productList.map(product => {
										return <ProductCard key={product.id} product={product} />;
								  })}
						</section>
					</>
				)}
			</main>
			<Footer />
		</>
	);
};

export default Products;
