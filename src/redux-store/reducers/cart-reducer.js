import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { productsAPI } from '../../api/api';

// after click 'add to cart' I request current product and add it to productsInCart
export const setProductsInCart = createAsyncThunk('products/setProductsInCartStatus', async productId => {
  const response = await productsAPI.getCurrentProduct(productId);
  return response.data;
});

const cartReducer = createSlice({
  name: 'cart',
  initialState: {
    productsInCart: [],
    errorMessage: '',
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(setProductsInCart.fulfilled, (state, action) => {
      state.productsInCart = [...state.productsInCart, action.payload];
      state.errorMessage = '';
    });
    builder.addCase(setProductsInCart.rejected, (state, action) => {
      state.errorMessage = action.error.message;
    });
  },
});

// export const { setCardsInCart } = cartReducer.actions;
export default cartReducer.reducer;
