import React from 'react';
import './SearchNotFound.css';
import search from '../../assets/images/search.png';

const SearchNotFound = () => {
  return (
    <>
      <div className="search-notfound-container">
        <img src={search} alt="" className="search-notfound-image" />
        <div className="search-notfound-info">
          <h2 className="search-notfound-info-title">
            Escribí en el buscador lo que querés encontrar.
          </h2>
          <ul className="search-notfound-info-text">
            <li>
              Escribí tu búsqueda en el campo que figura en la parte superior de
              la pantalla.
            </li>
            <li>
              Navegá por categorías de productos para encontrar el producto que
              buscás.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SearchNotFound;
