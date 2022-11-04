import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    
    updateProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export const productsReducer = productsSlice.reducer;

export const { updateProducts } = productsSlice.actions;
