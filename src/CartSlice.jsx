import { createSlice } from '@reduxjs/toolkit';
const handleAddToCart = (product) => {
  dispatch(addItem(product)); // Dispatch the action to add the product to the cart (Redux action)

  setAddedToCart((prevState) => ({ // Update the local state to reflect that the product has been added
    ...prevState, // Spread the previous state to retain existing entries
    [product.name]: true, // Set the current product's name as a key with value 'true' to mark it as added
  }));
};
export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const {name, image, cost} = action.payload;
      const existingItem = state.items.find (item => item.name === name);
      if (existing item) {
        existing Item.quantity++;
      } else {
        state.items.push ({ name, image, cost, quantity: 1 });
    
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
      const {name, quantity } = action.payload; 
      const itemToUpdate = state.items.find (item => item.name === name);
        if (itemToUpdate) {
          itemToUpdate.quantity = quantity;
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
