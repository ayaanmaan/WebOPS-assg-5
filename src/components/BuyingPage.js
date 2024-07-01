import React, { useState } from 'react';

const BuyingPage = ({ addToCart }) => {
  const [products] = useState([
    { id: 1, name: 'Product 1', price: 10, description: 'Description 1' },
    { id: 2, name: 'Product 2', price: 20, description: 'Description 2' },
    { id: 3, name: 'Product 3', price: 30, description: 'Description 3' },
  ]);

  return (
    <div>
      <h1>Buy Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyingPage;
