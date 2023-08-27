import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { productsAPI } from '../../api/api';

export const getProducts = createAsyncThunk('products/getProductsStatus', async () => {
  const response = await productsAPI.getAllProducts();
  return response.data;
});

const productReducer = createSlice({
  name: 'products',
  initialState: {
    products: [],
    isFetching: false,
    errorMessage: null,
    searchText: '',
  },
  reducers: {
    setSearchText(state, action) {
      state.searchText = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
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
  },
});

// Thunk creators
// export const getProducts = () => async dispatch => {
//   try {
//     dispatch(toggleIsFetching(true));
//     const response = await productsAPI.getAllProducts();
//     dispatch(getProductsSuccess(response.data));
//   } catch (error) {
//     dispatch(getProductsError(error))
//   } finally {
//     dispatch(toggleIsFetching(false));
//   }
// };

export const { getProductsSuccess, toggleIsFetching, getProductsError, setSearchText } = productReducer.actions;
export default productReducer.reducer;
