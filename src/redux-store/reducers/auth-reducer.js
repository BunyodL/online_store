import { createSlice } from '@reduxjs/toolkit';

const authReducer = createSlice({
  name: 'auth',
  initialState: {
    accountData: {
      username: null,
      age: null,
      email: null,
      avatar: null,
      password: null,
    },
    isAuth: false,
    errorMessage: null,
    token: null,
  },
  reducers: {
    signIn(state) {
      state.isAuth = true;
    },
    setPersonData(state, action) {
      state.accountData.username = action.payload.email;
      state.accountData.password = action.payload.password;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    signOut(state) {
      state.isAuth = false;
      localStorage.removeItem('token');
    }
  },
});

export const {
  signIn,
  setPersonData,
  setError,
  setToken,
  signOut
} = authReducer.actions;
export default authReducer.reducer;
