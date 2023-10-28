import { createSlice } from '@reduxjs/toolkit';

const authReducer = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
    username: null,
    password: null,
    errorMessage: null,
    token: null,
  },
  reducers: {
    setPersonData(state, action) {
      state.username = action.payload.email;
      state.password = action.payload.password;
      state.isAuth = true;
    },
    setError(state, action) {
      state.errorMessage = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    }
  },
});

export const { setPersonData, setError, setToken } = authReducer.actions;
export default authReducer.reducer;
