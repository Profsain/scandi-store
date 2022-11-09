import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  showProductDetails: false,
  openCartPage: false,
  productId: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    
    updateProducts(state, action) {
      state.products = action.payload;
    },

    toggleShowProductDetails(state) {
      state.showProductDetails = !state.showProductDetails;
    },

    toggleOpenCartPage(state) {
      state.openCartPage = !state.openCartPage;
    },

    setProductId(state, action) {
      state.productId = action.payload;
    },
  },
});

export const productsReducer = productsSlice.reducer;

export const {
  updateProducts,
  toggleShowProductDetails,
  toggleOpenCartPage,
  setProductId,
} = productsSlice.actions;
