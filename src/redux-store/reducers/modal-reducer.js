import { createSlice } from '@reduxjs/toolkit';

const modalReducer = createSlice({
  name: 'modal',
  initialState: {
    errorMessage: '',
    openModal: false,
  },
  reducers: {
    setOpenModal(state, action) {
      state.openModal = action.payload;
    },
  },
});

export const {
  setOpenModal,
} = modalReducer.actions;
export default modalReducer.reducer;
