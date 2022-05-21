import React from 'react';
import Rating from './Rating';

export default function Product(props) {
  const product = props.product;
  return (
    <div className="card" key={product._id}>
      <a href={`product/${product._id}`}>
        <img className="medium" src={product.image} alt={product.name} />
      </a>
      <div className="card-body">
        <a href="product.html">
          <h2>{product.name}</h2>
        </a>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <div className="price">${product.price}</div>
      </div>
    </div>
  );
}
