import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './screens/Home/Home.js';
import Products from './screens/Products/Products';
import Product from './screens/Product/Product';
import Cart from './screens/Cart/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AlertDisclaimer from './components/AlertDisclaimer/AlertDisclaimer';
import { useEffect } from 'react';

function App() {
	const [notified, setNotified] = useState(
		window.localStorage.getItem('notified') || false
	);
	useEffect(() => {
		!notified &&
			toast.warn(<AlertDisclaimer setNotified={setNotified} />, {
				closeButton: true,
				position: 'top-center',
				autoClose: false,
				closeOnClick: false,
				draggable: false,
			});
	}, []);

	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="products" element={<Products />} />
					<Route path="products/:id" element={<Product />} />
					<Route path="cart" element={<Cart />} />
				</Routes>
				<ToastContainer
					limit={1}
					autoClose={2500}
					pauseOnHover
					closeButton
					position={'top-center'}
					closeOnClick
					draggable
				/>
			</BrowserRouter>
		</div>
	);
}

export default App;
