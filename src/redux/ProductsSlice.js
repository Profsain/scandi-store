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
      state.loading = false;
      state.error = null;
    },
  },
});

export const productsReducer = productsSlice.reducer;

export const { updateProducts } = productsSlice.actions;
