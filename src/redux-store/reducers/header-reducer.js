import { createSlice } from '@reduxjs/toolkit';

const headerReducer = createSlice({
  name: 'header',
  initialState: {
    accountMenuEl: null,
    mobileMoreAnchorEl: null,
    menuDrawer: false,
    accountDrawer: false,
  },
  reducers: {
    setAccountMenuEl(state, action) {
      state.accountMenuEl = action.payload;
    },
    setMobileMoreAnchorEl(state, action) {
      state.mobileMoreAnchorEl = action.payload;
    },
    setMenuDrawer(state, action) {
      state.menuDrawer = action.payload;
    },
    setAccountDrawer(state, action) {
      state.accountDrawer = action.payload;
    }
  },
});

export const {
  setAccountMenuEl,
  setMobileMoreAnchorEl,
  setAccountDrawer,
  setMenuDrawer,
} = headerReducer.actions;
export default headerReducer.reducer;
