import React from 'react';
import './productCard.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
	function formatPrice(price, currency) {
		return new Intl.NumberFormat('ES-AR', {
			style: 'currency',
			currency: currency,
		}).format(price);
	}

	return (
		<div key={product.id} className="product-container">
			<Link to={`/products/${product.id}`} className="product-image-container">
				<img
					src={product.thumbnail}
					alt={product.title}
					className="product-image"
				/>
			</Link>
			<div className="product-info">
				<Link to={`/products/${product.id}`}>
					<h3 className="product-info-title">{product.title}</h3>
				</Link>
				<a href={product.seller.permalink} className="product-info-seller">
					{!product.seller.eshop
						? ''
						: 'Vendido por ' + product.seller.eshop.nick_name}
				</a>

				<span className="product-info-price">
					{!product.original_price ? (
						''
					) : (
						<span className="product-info-original-price">
							{formatPrice(product.original_price, product.currency_id)}
						</span>
					)}
					{formatPrice(product.price, product.currency_id)}
					{!product.original_price ? null : (
						<span className="product-info-discount">
							{Math.floor(
								((product.original_price - product.price) * 100) /
									product.original_price
							) + '% OFF'}
						</span>
					)}
				</span>
				<span className="product-info-condition">
					{product.condition === 'new' && 'Nuevo'}
					{product.condition === 'used' && 'Usado'}
					{product.condition === 'not_specified' && 'Condición no especificada'}
				</span>
			</div>
		</div>
	);
};

export default ProductCard;
