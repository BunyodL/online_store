import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { productsAPI } from '../../api/api';

export const getProducts = createAsyncThunk('products/getProductsStatus', async () => {
  const response = await productsAPI.getAllProducts();
  return response.data;
});

export const getCurrentProduct = createAsyncThunk('products/getCurrentProductStatus', async (productId) => {
  const response = await productsAPI.getCurrentProduct(productId);
  return response.data;
});

const productReducer = createSlice({
  name: 'products',
  initialState: {
    products: [],
    currentProduct: {},
    isFetching: false,
    errorMessage: null,
    openModal: false,
    searchText: '',
    category: [],
    productsCategories: [],
    sort: '',
    searching: [],
  },
  reducers: {
    setSearchText(state, action) {
      state.searchText = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setOpenModal(state, action) {
      state.openModal = action.payload;
    },
    setSearching(state, action) {
      state.searching = action.payload;
    },
    setProductsCategories(state, action) {
      state.productsCategories = action.payload;
    },
  },
  extraReducers: builder => {
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
    builder.addCase(getCurrentProduct.pending, (state, action) => {
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

export const { setSearchText, setCategory, setSort, setOpenModal, setSearching, setCurrentProductId, setProductsCategories } =
  productReducer.actions;
export default productReducer.reducer;
