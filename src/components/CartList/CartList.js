import React from 'react';
import { Link } from 'react-router-dom';

const CartList = ({
	cart,
	cartActive,
	onDeleteProduct,
	onProductQuantityRemove,
	onProductQuantityAdd,
	onCartOrSaved,
}) => {
	function formatPrice(price, currency) {
		return new Intl.NumberFormat('ES-AR', {
			style: 'currency',
			currency: currency,
		}).format(price);
	}

	function total() {
		let total = cart
			.map(product => product.price * product.cart_quantity)
			.reduce((acc, productPrice) => acc + productPrice);

		return formatPrice(total, 'ARS');
	}

	return (
		<>
			<div className="products-list">
				{cart.length === 0 ? (
					cartActive ? (
						<div className="cart-empty">
							<h3 className="cart-empty-title">Tu carrito está vacío</h3>
							<p className="cart-empty-text">
								¿No sabés qué comprar? ¡Miles de productos te esperan!
							</p>
						</div>
					) : (
						<div className="cart-empty">
							<h3 className="cart-empty-title">No tenés productos guardados</h3>
							<p className="cart-empty-text">
								Si aún no estás decidido en comprar algún producto de tu
								carrito, podés dejarlo aquí.
							</p>
						</div>
					)
				) : (
					<>
						{cart.map(product => (
							<div key={product.id} className="product">
								<div className="product-col-image">
									<img src={product.secure_thumbnail} alt={product.title} />
								</div>
								<div className="product-col-info">
									<Link to={`/products/${product.id}`}>
										<h3 className="product-title">{product.title}</h3>
									</Link>
									<span className="product-options">
										<button
											onClick={() => onDeleteProduct(product.id)}
											className="cart-btn"
										>
											Eliminar
										</button>
										<button className="cart-btn">
											Más productos del vendedor
										</button>
										<button className="cart-btn">Comprar ahora</button>
										{cartActive ? (
											<button
												onClick={() => onCartOrSaved(product, 'savedProduct')}
												className="cart-btn"
											>
												Guardar para después
											</button>
										) : (
											<button
												onClick={() => onCartOrSaved(product, 'cart')}
												className="cart-btn"
											>
												Agregar al carrito
											</button>
										)}
									</span>
								</div>
								<div className="product-col-quantity">
									<div className="product-quantity-container">
										<button
											className="product-quantity-remove"
											onClick={() => onProductQuantityRemove(product.id)}
										>
											-
										</button>
										<span className="product-quantity">
											{product.cart_quantity ? product.cart_quantity : 1}
										</span>
										<button
											className="product-quantity-add"
											onClick={() => onProductQuantityAdd(product.id)}
										>
											+
										</button>
									</div>
								</div>
								<div className="product-col-price">
									<span className="cart-product-detail-info-price">
										{!product.original_price ? (
											''
										) : (
											<span className="product-detail-info-original-price">
												{formatPrice(
													product.original_price * product.cart_quantity,
													product.currency_id
												)}
											</span>
										)}
										{formatPrice(
											product.price * product.cart_quantity,
											product.currency_id
										)}
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
							</div>
						))}
						{cartActive && (
							<>
								<div className="cart-total-container">
									<div className="cart-total-title">Total</div>
									<div className="cart-total-price">
										{cart.length > 0 && total()}
									</div>
								</div>
								<div className="cart-purchase-container">
									<button className="cart-purchase-btn">
										Continuar compra
									</button>
								</div>
							</>
						)}
					</>
				)}
			</div>
		</>
	);
};

export default CartList;
