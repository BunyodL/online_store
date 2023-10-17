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
    productsInCart: [],
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
    setProductsToCart(state, action) {
      const addedProduct = {
        ...state.products.reduce((acc, elem) =>
          elem.id === action.payload.productId ? acc = elem : acc, null),
        quantity: action.payload.quantity
      };
      state.productsInCart.push(addedProduct);
    },
    removeProductsFromCart(state, action) {
      state.productsInCart = state.productsInCart.filter(elem => elem.id !== action.payload);
    },
    setProductQuantity(state, action) {
      state.productsInCart.filter((elem => {
        if (elem.id === action.payload.productId) {
          if (action.payload.case === '+') {
            return elem.quantity += 1;
          } else {
            return elem.quantity -= 1;
          }
        }
      }));
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
  setOpenAlert,
  setProductsToCart,
  removeProductsFromCart,
  setProductQuantity,
} = productsReducer.actions;
export default productsReducer.reducer;
