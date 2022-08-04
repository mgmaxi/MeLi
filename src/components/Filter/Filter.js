import React, { useState } from 'react';
import './filter.css';

const Filter = ({ state, products, onProductsFiltered }) => {
	const [filterActive, setFilterActive] = useState(true);

	const filterResultsByFreeShipping = shipping => {
		let product = products.filter(
			product => product.shipping.free_shipping === shipping
		);
		return product ? product.length : 0;
	};

	const filterShipping = shipping => {
		let productsFiltered = products.filter(
			product => product.shipping.free_shipping === shipping
		);
		return onProductsFiltered(productsFiltered);
	};

	const filterResultsByCondition = condition => {
		let product = products.filter(product => product.condition === condition);
		return product ? product.length : 0;
	};

	const filterCondition = condition => {
		let productsFiltered = products.filter(
			product => product.condition === condition
		);
		return onProductsFiltered(productsFiltered);
	};

	const filterResultsByPrice = (priceA, priceB) => {
		let product = products.filter(
			product =>
				(product.price > priceA) &
				(!priceB ? product.price > priceA : product.price < priceB)
		);
		return product ? product.length : 0;
	};

	const filterPrice = (priceA, priceB) => {
		let productsFiltered = products.filter(
			product =>
				(product.price > priceA) &
				(!priceB ? product.price > priceA : product.price < priceB)
		);
		return onProductsFiltered(productsFiltered);
	};

	const filterSortPrice = sort => {
		let productsSort = products.sort(
			(productA, productB) => productA.price - productB.price
		);
		let productsSortReversed = [...productsSort].reverse();

		return sort === 'minor'
			? onProductsFiltered(productsSort)
			: onProductsFiltered(productsSortReversed);
	};

	const filterSortAlphabetically = sort => {
		let productsSort = products.sort((productA, productB) =>
			productA.title.trim().localeCompare(productB.title.trim())
		);
		let productsSortReversed = [...productsSort].reverse();

		return sort === 'A'
			? onProductsFiltered(productsSort)
			: onProductsFiltered(productsSortReversed);
	};

	const filterState = state => {
		let productsFiltered = products.filter(
			product => product.address.state_name === state
		);
		return onProductsFiltered(productsFiltered);
	};

	let allProductStates = products.map(product => product.address.state_name);

	let productStates = allProductStates.filter(
		(state, index) => allProductStates.indexOf(state) === index
	);

	const productStatesNumber = state => {
		let states = allProductStates.filter(e => e === state);
		return states.length;
	};

	return (
		<div className={filterActive ? 'filters' : 'filters hideFilter'}>
			<span
				className="close-btn"
				onClick={() => setFilterActive(!filterActive)}
			>
				{filterActive ? 'X' : '>'}
			</span>
			<h2 className="query-title">
				{state.charAt(0).toUpperCase() + state.slice(1)}
			</h2>
			<span className="query-results">{products.length} resultados</span>

			<h3 className="condition-filter"> Costo de envío</h3>
			<ul>
				<li>
					<button className="filter-btn" onClick={() => filterShipping(true)}>
						Gratis ({filterResultsByFreeShipping(true)})
					</button>
				</li>
			</ul>

			<h3 className="condition-filter">Condición</h3>
			<ul>
				<li>
					<button className="filter-btn" onClick={() => filterCondition('new')}>
						Nuevo ({filterResultsByCondition('new')})
					</button>
				</li>
				<li>
					<button
						className="filter-btn"
						onClick={() => filterCondition('used')}
					>
						Usado ({filterResultsByCondition('used')})
					</button>
				</li>
				<li>
					<button
						className="filter-btn"
						onClick={() => filterCondition('not_specified')}
					>
						No especificado ({filterResultsByCondition('not_specified')})
					</button>
				</li>
			</ul>

			<h3 className="condition-filter">Rango de precio</h3>
			<ul>
				<li>
					<button className="filter-btn" onClick={() => filterPrice(0, 1500)}>
						Hasta $1.500 ({filterResultsByPrice(0, 1500)})
					</button>
				</li>
				<li>
					<button
						className="filter-btn"
						onClick={() => filterPrice(1500, 5500)}
					>
						$1.500 a $5.500 ({filterResultsByPrice(1500, 5500)})
					</button>
				</li>
				<li>
					<button className="filter-btn" onClick={() => filterPrice(5500)}>
						Más de $5.500 ({filterResultsByPrice(5500)})
					</button>
				</li>
			</ul>

			<h3 className="condition-filter">Ordernar por precio</h3>
			<ul>
				<li>
					<button
						className="filter-btn"
						onClick={() => filterSortPrice('minor')}
					>
						Menor a mayor
					</button>
				</li>
				<li>
					<button
						className="filter-btn"
						onClick={() => filterSortPrice('major')}
					>
						Mayor a menor
					</button>
				</li>
			</ul>

			<h3 className="condition-filter">Ordernar alfabéticamente</h3>
			<ul>
				<li>
					<button
						className="filter-btn"
						onClick={() => filterSortAlphabetically('A')}
					>
						A - Z
					</button>
				</li>
				<li>
					<button
						className="filter-btn"
						onClick={() => filterSortAlphabetically('Z')}
					>
						Z - A
					</button>
				</li>
			</ul>

			<h3 className="condition-filter">Ubicación</h3>
			<ul>
				{productStates.map(state => (
					<li key={state}>
						<button className="filter-btn" onClick={() => filterState(state)}>
							{state} ({productStatesNumber(state)})
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Filter;
