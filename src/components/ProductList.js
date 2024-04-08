// ProductList.js

import React, { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/products.json')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Ошибка при загрузке данных:', error));
  }, []);

  return (
    <div>
      <h2>Список товаров</h2>
      <ul>
        {products.map(product => (
          <li key={product.name}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.detail}</p>
            <p>Цена: {product.price}</p>
            {product.offer && <p>Специальное предложение: {product.offer}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
