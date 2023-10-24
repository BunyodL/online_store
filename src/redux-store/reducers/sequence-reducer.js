import { createSlice } from '@reduxjs/toolkit';

const sequenceReducer = createSlice({
  name: 'sequence',
  initialState: {
    categories: [],
    searchText: '',
    category: [],
    productsWithCategories: [],
    sort: '',
    searching: [],
  },
  reducers: {
    setCategories(state, action) {
      action.payload.filter((elem) => {
        if (!state.categories.includes(elem.category)) {
          state.categories.push(elem.category);
        }
      });
    },
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
  setCategories,
  setSearchText,
  setCategory,
  setProductsWithCategories,
  setSort,
  setSearching
} = sequenceReducer.actions;

export default sequenceReducer.reducer;
