import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authAPI } from '../../api/api';

export const login = createAsyncThunk('auth/login', async (loginData, thunkAPI) => {
  return await authAPI.login(loginData.email, loginData.password);
});

const authReducer = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
    username: null,
    password: null,
    errorMessage: null,
    isFetching: false,
    token: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state.isFetching = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.username = action.meta.arg.username;
      state.password = action.meta.arg.password;
      state.isFetching = false;
      state.isAuth = true;
      state.token = action.payload.data.token
    });
    builder.addCase(login.rejected, (state, action) => {
      state.errorMessage = action.error.message;
      state.isFetching = false;
    });
  },
});

export default authReducer.reducer;
