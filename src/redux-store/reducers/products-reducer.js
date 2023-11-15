import { createSlice } from '@reduxjs/toolkit';

const productsReducer = createSlice({
  name: 'products',
  initialState: {
    products: [],
    productsInCart: [],
    errorMessage: '',
    openAlert: false,
    alert: {},
    pagination: {
      currentPage: 1,
      limit: 8,
    },
  },
  reducers: {
    setProducts(state, action) {
        state.products = action.payload;
    },
    setOpenAlert(state, action) {
      state.openAlert = action.payload;
    },
    setAlert(state, action) {
      state.alert = action.payload;
    },
    setCartProducts(state, action) {
      state.productsInCart = action.payload;
    },
    setProductsToCart(state, action) {
      const addedProduct = {
        ...state.products.reduce(
          (acc, elem) => (elem.id === action.payload.productId ? elem : acc),
          null
        ),
        quantity: action.payload.quantity,
      };
      state.productsInCart.push(addedProduct);
      localStorage.setItem('productsInCart', JSON.stringify(state.productsInCart));
    },
    removeProductsFromCart(state, action) {
      state.productsInCart = state.productsInCart.filter((elem) => elem.id !== action.payload);
      localStorage.setItem('productsInCart', JSON.stringify(state.productsInCart));
    },
    setProductQuantity(state, action) {
      state.productsInCart.filter((elem) =>
        elem.id === action.payload.productId
          ? action.payload.case === '+'
            ? (elem.quantity += 1)
            : (elem.quantity -= 1)
          : null
      );
      localStorage.setItem('productsInCart', JSON.stringify(state.productsInCart));
    },
    resetCart(state) {
      state.productsInCart = [];
      localStorage.removeItem('productsInCart');
    },
    setPage(state, action) {
      state.pagination.currentPage = action.payload;
    },
  },
});

export const {
  setAlert,
  setOpenAlert,
  setCartProducts,
  setProductsToCart,
  removeProductsFromCart,
  setProductQuantity,
  setProducts,
  setPage,
  resetCart,
} = productsReducer.actions;
export default productsReducer.reducer;
