import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { productsAPI } from '../../api/api';

export const getProducts = createAsyncThunk('products/getProductsStatus', async () => {
  const response = await productsAPI.getAllProducts();
  return response.data;
});

export const getCurrentProduct = createAsyncThunk('products/getCurrentProductStatus', async productId => {
  const response = await productsAPI.getCurrentProduct(productId);
  return response.data;
});

const productsReducer = createSlice({
  name: 'products',
  initialState: {
    products: [],
    currentProduct: {},
    isFetching: false,
    errorMessage: null,
    openModal: false,
    openAlert: false,
    alert: {},
  },
  reducers: {
    setOpenModal(state, action) {
      state.openModal = action.payload;
    },
    setOpenAlert(state, action) {
      state.openAlert = action.payload;
    },
    setAlert(state, action) {
      state.alert = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getProducts.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.isFetching = false;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.errorMessage = action.error.message;
      state.isFetching = false;
    });
    builder.addCase(getCurrentProduct.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(getCurrentProduct.fulfilled, (state, action) => {
      state.currentProduct = action.payload;
      state.isFetching = false;
    });
    builder.addCase(getCurrentProduct.rejected, (state, action) => {
      state.errorMessage = action.error.message;
      state.isFetching = false;
    });
  },
});

export const {
  setOpenModal,
  setAlert,
  setOpenAlert
} = productsReducer.actions;
export default productsReducer.reducer;
