import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

const products = [
  { name: 'Spider Plant', image: 'spider-plant.jpg', cost: '$12.00' },
  { name: 'Peach Lily', image: 'peach-lily.jpg', cost: '$18.00' },
  { name: 'Snake Plant', image: 'snake-plant.jpg', cost: '$15.00' },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [addedToCart, setAddedToCart] = useState({});

  const calculateTotalQuantity = () => {
    return cartItems ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0;
  };

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedToCart(prev => ({ ...prev, [product.name]: true }));
  };

  return (
    <div className="product-list">
      <h2>Available Plants</h2>
      <div>Total items in cart: {calculateTotalQuantity()}</div>
      <ul>
        {products.map(product => (
          <li key={product.name} className="product-item">
            <img src={product.image} alt={product.name} width={100} />
            <div>{product.name}</div>
            <div>{product.cost}</div>
            <button
              onClick={() => handleAddToCart(product)}
              disabled={addedToCart[product.name]}
            >
              {addedToCart[product.name] ? 'Added' : 'Add to cart'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
