import { createSlice } from '@reduxjs/toolkit';

const sequenceReducer = createSlice({
  name: 'sequence',
  initialState: {
    searchText: '',
    category: [],
    productsWithCategories: [],
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
    setProductsWithCategories(state, action) {
      state.productsWithCategories = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setSearching(state, action) {
      state.searching = action.payload;
    },
  },
});

export const {
  setSearchText,
  setCategory,
  setProductsWithCategories,
  setSort,
  setSearching
} = sequenceReducer.actions;

export default sequenceReducer.reducer;
