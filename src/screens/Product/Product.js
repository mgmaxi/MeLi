import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../services/Products';
import './product.css';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Product = () => {
	const [product, setProduct] = useState();
	let { id } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getProduct(id);
				setProduct(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, [id]);

	return (
		<>
			<Header />
			<main>
				{product ? (
					<ProductDetail product={product} />
				) : (
					'No existe el producto.'
				)}
			</main>
			<Footer />
		</>
	);
};

export default Product;
