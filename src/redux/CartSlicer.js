import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartStore: [],
  },

  reducers: {
    addItemToCart: (state, action) => {
      const itemInCart = state.cartStore.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cartStore.push({...action.payload, quantity: 1});
      }
    },

    removeItemFromCart: (state, action) => {
      const removeItem = state.cartStore.filter((item) => item.id !== action.payload);
      state.cartStore = removeItem
    },

    incrementQuantity: (state, action) =>{
      const item = state.cartStore.find((item) => item.id === action.payload);
      item.quantity++;
    },

    decrementQuantity: (state, action) => {
      const item = state.cartStore.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
  }
});

export const cartReducer = cartSlice.reducer;
export const {
  addItemToCart,
  removeItemFromCart,
  incrementQuantity,
  decrementQuantity
} = cartSlice.actions; 