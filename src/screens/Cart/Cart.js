import React, { useState, useEffect } from 'react';
import './cart.css';
import CartList from '../../components/CartList/CartList';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Cart = () => {
	const [cart, setCart] = useState(
		JSON.parse(window.localStorage.getItem('cart')) || []
	);
	const [savedProduct, setSavedProduct] = useState(
		JSON.parse(window.localStorage.getItem('saved')) || []
	);
	const [cartShow, setCartShow] = useState(true);

	useEffect(() => {
		window.localStorage.setItem('cart', JSON.stringify(cart));
		window.localStorage.setItem('saved', JSON.stringify(savedProduct));
	}, [cart, savedProduct]);

	function deleteProduct(productId) {
		cartShow
			? setCart(cart.filter(product => product.id !== productId))
			: setSavedProduct(
					savedProduct.filter(product => product.id !== productId)
			  );
	}

	function productQuantityRemove(productId) {
		let state = cartShow ? cart : savedProduct;

		let changeQuantity = state.map(product =>
			product.id === productId
				? {
						...product,
						cart_quantity: product.cart_quantity
							? product.cart_quantity === 1
								? 1
								: product.cart_quantity - 1
							: 1,
				  }
				: product
		);
		cartShow ? setCart(changeQuantity) : setSavedProduct(changeQuantity);
	}

	function productQuantityAdd(productId) {
		let state = cartShow ? cart : savedProduct;
		let changeQuantity = state.map(product =>
			product.id === productId
				? {
						...product,
						cart_quantity: product.cart_quantity
							? product.cart_quantity + 1
							: 1,
				  }
				: product
		);
		cartShow ? setCart(changeQuantity) : setSavedProduct(changeQuantity);
	}

	function cartOrSaved(product, state) {
		deleteProduct(product.id);

		(state === 'cart' ? setCart : setSavedProduct)([
			...(state === 'cart' ? cart : savedProduct),
			{
				...product,
			},
		]);
	}

	return (
		<>
			<Header />
			<main className="cart-main">
				<div className="products-container">
					<section className="cart">
						<h2 className="cart-title">
							<span
								className={cartShow ? 'cart-title-active' : undefined}
								onClick={() => setCartShow(true)}
							>
								Carrito ({cart.length})
							</span>
							<span
								className={!cartShow ? 'cart-title-active' : undefined}
								onClick={() => setCartShow(false)}
							>
								Guardados ({savedProduct.length})
							</span>
						</h2>
						{cartShow ? (
							<CartList
								cart={cart}
								cartActive={true}
								onDeleteProduct={deleteProduct}
								onProductQuantityRemove={productQuantityRemove}
								onProductQuantityAdd={productQuantityAdd}
								onCartOrSaved={cartOrSaved}
							/>
						) : (
							<CartList
								cart={savedProduct}
								cartActive={false}
								onDeleteProduct={deleteProduct}
								onProductQuantityRemove={productQuantityRemove}
								onProductQuantityAdd={productQuantityAdd}
								onCartOrSaved={cartOrSaved}
							/>
						)}
					</section>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default Cart;
