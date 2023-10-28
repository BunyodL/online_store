import { createSlice } from '@reduxjs/toolkit';

const sequenceReducer = createSlice({
  name: 'sequence',
  initialState: {
    allCategories: [],
    selectedCategories: [],
    productsBasedOnCategories: [],
    selectedSort: '',
    searching: [],
    searchText: '',
  },
  reducers: {
    setAllCategories(state, action) {
      action.payload.forEach((elem) => {
        if (!state.allCategories.includes(elem.category)) {
          state.allCategories.push(elem.category);
        }
      });
    },
    setSearchText(state, action) {
      state.searchText = action.payload;
    },
    setSelectedCategories(state, action) {
      state.selectedCategories = action.payload;
    },
    setProductsBasedOnCategories(state, action) {
      state.productsBasedOnCategories = action.payload;
    },
    setSelectedSort(state, action) {
      state.selectedSort = action.payload;
    },
    setSearching(state, action) {
      state.searching = action.payload;
    },
  },
});

export const {
  setAllCategories,
  setSearchText,
  setSelectedCategories,
  setProductsBasedOnCategories,
  setSelectedSort,
  setSearching
} = sequenceReducer.actions;

export default sequenceReducer.reducer;
