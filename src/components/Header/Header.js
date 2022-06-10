import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import FullLogo from '../../assets/images/full-logo.png';
import Logo from '../../assets/images/logo.png';
import Freesend from '../../assets/images/free-send.png';
import { IoIosSearch } from 'react-icons/io';
import { FiMapPin } from 'react-icons/fi';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsCart2 } from 'react-icons/bs';

const Navbar = ({ onHandleSubmit }) => {
  async function handleSubmit(event) {
    event.preventDefault();
    const query = event.target.elements.search.value;
    await onHandleSubmit(query);
  }
  return (
    <>
      <header>
        <div className="header-main">
          <Link to="/">
            <img
              src={FullLogo}
              alt="Full logo Mercado Libre"
              className="full-logo"
            />
          </Link>
          <img src={Logo} alt="Logo Mercado Libre" className="logo" />
          <form onSubmit={handleSubmit} className="header-main-form">
            <input
              id="search"
              type="search"
              className="search"
              placeholder="Buscar productos, marcas y más..."
            />
            <button type="submit" className="search-btn">
              <IoIosSearch />
            </button>
          </form>
          <img
            className="header-main-free-send"
            src={Freesend}
            alt="Free send"
          />
          <ul className="header-main-responsive-menu">
            <li>
              <AiOutlineMenu />
            </li>
            <li>
              <a href="/">
                <BsCart2 />
              </a>
            </li>
          </ul>
        </div>
        <div className="header-menu">
          <button className="header-menu-send">
            <FiMapPin className="map-icon" />
            <div>
              <span className="header-menu-send-to">Enviar a</span>
              <span className="header-menu-send-location">Capital Federal</span>
            </div>
          </button>
          <nav className="header-menu-navbar">
            <ul>
              <li>
                <a href="/">Categorías</a>
              </li>
              <li>
                <a href="/">Ofertas</a>
              </li>
              <li>
                <a href="/">Historial</a>
              </li>
              <li>
                <a href="/">Supermercado</a>
              </li>
              <li>
                <a href="/">Moda</a>
              </li>
              <li>
                <a href="/">Vender</a>
              </li>
              <li>
                <a href="/">Ayuda</a>
              </li>
            </ul>
          </nav>
          <div className="header-menu-profile">
            <ul>
              <li>
                <a href="/">Creá tu cuenta</a>
              </li>
              <li>
                <a href="/">Ingresá</a>
              </li>
              <li>
                <a href="/">Mis compras</a>
              </li>
              <li className="cart-icon">
                <a href="/">
                  <BsCart2 />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;