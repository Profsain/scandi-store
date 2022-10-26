import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  categories: [],
  cart: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductsStart(state) {
      state.loading = true;
    },
    getProductsSuccess(state, action) {
      state.products = action.payload;
      state.loading = false;
      state.error = null;
    },
    getProductsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    // other reducers
  },
});

export const { getProductsStart, getProductsSuccess, getProductsFailure } = productsSlice.actions;

export default productsSlice.reducer;
