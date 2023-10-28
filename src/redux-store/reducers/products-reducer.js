import { createSlice } from '@reduxjs/toolkit';

const productsReducer = createSlice({
  name: 'products',
  initialState: {
    products: [],
    productsInCart: [],
    errorMessage: '',
    openAlert: false,
    alert: {},
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
    setProductsToCart(state, action) {
      const addedProduct = {
        ...state.products.reduce((acc, elem) =>
          elem.id === action.payload.productId ? elem : acc, null),
        quantity: action.payload.quantity
      };
      state.productsInCart.push(addedProduct);
    },
    removeProductsFromCart(state, action) {
      state.productsInCart = state.productsInCart.filter(elem => elem.id !== action.payload);
    },
    setProductQuantity(state, action) {
      state.productsInCart.filter(elem =>
        elem.id === action.payload.productId
          ? (action.payload.case === '+' ? elem.quantity += 1 : elem.quantity -= 1)
          : null
      );
    },
  },
});

export const {
  setAlert,
  setOpenAlert,
  setProductsToCart,
  removeProductsFromCart,
  setProductQuantity,
  setProducts,
} = productsReducer.actions;
export default productsReducer.reducer;
