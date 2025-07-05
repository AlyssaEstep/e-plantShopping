import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => {
      // Assuming item.cost is a string like "$12.00"
      const price = parseFloat(item.cost.substring(1));
      return total + price * item.quantity;
    }, 0);
  };

  const handleContinueShopping = (e) => {
    onContinueShopping(e); // Fixed typo here
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  return (
    <div className="cart-container">
      {cartItems.map(item => (
        <div key={item.name} className="cart-item">
          <span>{item.name}</span>
          <span>Quantity: {item.quantity}</span>
          <button onClick={() => handleIncrement(item)}>+</button>
          <button onClick={() => handleDecrement(item)}>-</button>
          <button onClick={() => handleRemove(item)}>Remove</button>
        </div>
      ))}
      <div>Total: ${calculateTotalAmount().toFixed(2)}</div>
      <button onClick={handleContinueShopping}>Continue Shopping</button>
    </div>
  );
};

export default CartItem;


