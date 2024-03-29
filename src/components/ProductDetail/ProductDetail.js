import React, { useState, useEffect } from 'react';
import { BsHeart, BsTruck } from 'react-icons/bs';
import Coments from '../../components/Coments/Coments';
import { toast } from 'react-toastify';
import './productDetail.css';

const ProductDetail = ({ product }) => {
	const [currentImage, setCurrentImage] = useState(product.pictures[0].url);
	const [cart, setCart] = useState(
		JSON.parse(window.localStorage.getItem('cart')) || []
	);
	const [savedProduct, setSavedProduct] = useState(
		JSON.parse(window.localStorage.getItem('saved')) || []
	);

	useEffect(() => {
		window.localStorage.setItem('cart', JSON.stringify(cart));
		window.localStorage.setItem('saved', JSON.stringify(savedProduct));
	}, [cart, savedProduct]);

	function handleAddToCart() {
		cart.some(cartProduct => cartProduct.id === product.id) ||
		savedProduct.some(savedProduct => savedProduct.id === product.id)
			? toast.warn(
					'Este producto ya se encuentra en el carrito de compras o guardado.'
			  )
			: setCart([
					...cart,
					{
						...product,
						cart_quantity: 1,
					},
			  ])(
					toast.success('El producto ha sido agregado al carrito de compras.')
			  );
	}

	function formatPrice(price, currency) {
		return new Intl.NumberFormat('ES-AR', {
			style: 'currency',
			currency: currency,
		}).format(price);
	}

	return (
		<>
			<div className="product-detail-container">
				<div className="product-detail-main-row">
					<div className="product-detail-galery">
						{product.pictures.slice(0, 5).map(picture => {
							return (
								<img
									key={picture.id}
									src={picture.url}
									alt={product.title}
									className="product-detail-galery-image"
									onClick={() => setCurrentImage(picture.url)}
								/>
							);
						})}
					</div>
					<div className="product-detail-main-image">
						<img src={currentImage} alt={product.title} />
					</div>
					<div className="product-detail-info-container">
						<div className="product-detail-info">
							<span className="product-detail-info-condition">
								{product.condition === 'new' ? 'Nuevo' : 'Usado'} |{' '}
								{product.sold_quantity + ' vendidos'}
							</span>
							<BsHeart className="heart-icon" />
							<h3 className="product-detail-info-title">{product.title}</h3>
							<span className="product-detail-info-price">
								{!product.original_price ? (
									''
								) : (
									<span className="product-detail-info-original-price">
										{formatPrice(product.original_price, product.currency_id)}
									</span>
								)}
								{formatPrice(product.price, product.currency_id)}
								{!product.original_price ? null : (
									<span className="product-detail-info-discount">
										{Math.floor(
											((product.original_price - product.price) * 100) /
												product.original_price
										) + '% OFF'}
									</span>
								)}
							</span>
						</div>
						<h3 className="product-detail-info-shipping">
							<BsTruck className="truck-icon" />
							Envío gratis a todo el país
						</h3>
						<p className="product-detail-info-shipping-text">
							Conocé los tiempos y las formas de envío.
						</p>
						<h3 className="product-detail-info-available">
							{product.available_quantity > 0 ? (
								<div>
									Stock disponible
									<span className="product-detail-info-stockavailable">
										({product.available_quantity} disponibles)
									</span>
								</div>
							) : (
								'Sin stock'
							)}
						</h3>
						<button type="text" className="buy-btn">
							Comprar ahora
						</button>
						<button
							type="text"
							className="add-cart-btn"
							onClick={handleAddToCart}
						>
							Agregar al carrito
						</button>
					</div>
				</div>
				<div className="product-detail-secondary-row">
					<p className="product-detail-description"></p>
				</div>
				<Coments />
			</div>
		</>
	);
};

export default ProductDetail;
