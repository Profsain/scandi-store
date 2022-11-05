import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './CartSlicer';
import { productsReducer } from './ProductsSlice';

export const store = configureStore({
  reducer: {
    cartReducer,
    productsReducer,
  },
});