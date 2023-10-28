import { createSlice } from '@reduxjs/toolkit';

const modalReducer = createSlice({
  name: 'products',
  initialState: {
    currentProductId: null,
    errorMessage: '',
    openModal: false,
  },
  reducers: {
    setCurrentProductId(state, action) {
      state.currentProductId = action.payload;
    },
    setOpenModal(state, action) {
      state.openModal = action.payload;
    },
  },
});

export const {
  setCurrentProductId,
  setOpenModal,
} = modalReducer.actions;
export default modalReducer.reducer;
