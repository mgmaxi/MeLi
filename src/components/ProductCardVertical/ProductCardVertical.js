import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCardVertical.css';

const ProductCardVertical = ({ product }) => {
  function formatPrice(price, currency) {
    return new Intl.NumberFormat('ES-AR', {
      style: 'currency',
      currency: currency,
    }).format(price);
  }
  return (
    <>
      <Link to={`/products/${product.id}`}>
        <div className="card-vertical-container">
          <div className="card-vertical-image-container">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="card-vertical-image"
            />
          </div>
          <div className="card-vertical-divider"></div>
          <div className="card-vertical-price">
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
          </div>
          <h3 className="card-vertical-title">{product.title}</h3>
        </div>
      </Link>
    </>
  );
};

export default ProductCardVertical;
