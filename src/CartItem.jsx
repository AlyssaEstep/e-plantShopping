import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';
const CartItem = ({ onContinueShopping }) => {
    const dispatch = useDispatch();
const cart=useSelector((state) => state.cart,items);
  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    return cart.reduce((total,items) => total + items.price * items.quantity, 0);
  };

  const handleContinueShopping = (e) => {
   e.preventDefault();
   navigate('/plant');
  };
    const handleIncrement = (items) => {
    dispatch(updateQuantity({id: items.id, quantity: items.quantity + 1}));
  };

  const handleDecrement = (items) => {
   if (item.quantity>1) {
    dispatch(updateQuantity({id: items.id, quantity: items.quantity - 1}));
   }
  };

  const handleRemove = (items) => {
    dispatch(removeItem(items.id));
  };

  const calculateTotalCost = (items) => {
    const price = typeof items.price === 'string' ? parseFloat(items.price.replace('$', '')) : items.price;
    return price * items.quantity;
  };
  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-remove" onClick={() => handleRemove(item)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'>
        Total Amount: ${calculateTotalAmount()}
      </div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1">Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;


