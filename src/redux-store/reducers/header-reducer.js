import { createSlice } from '@reduxjs/toolkit';

const headerReducer = createSlice({
  name: 'header',
  initialState: {
    anchorEl: null,
    mobileMoreAnchorEl: null,
    menuId: 'primary-search-account-menu',
    mobileMenuId: 'primary-search-account-menu-mobile',
  },
  reducers: {
    setAnchorEl(state, action) {
      state.anchorEl = action.payload;
    },
    setMobileMoreAnchorEl(state, action) {
      state.mobileMoreAnchorEl = action.payload;
    },
  },
});

export const { setAnchorEl, setMobileMoreAnchorEl } = headerReducer.actions;
export default headerReducer.reducer;
