import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  showProductDetails: false,
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

    setProductId(state, action) {
      state.productId = action.payload;
    },
  },
});

export const productsReducer = productsSlice.reducer;

export const { updateProducts, toggleShowProductDetails, setProductId } = productsSlice.actions;
