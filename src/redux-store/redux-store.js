import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/product-reducer";
import authReducer from "./reducers/auth-reducer";

const rootReducer = combineReducers({
  products: productReducer,
  auth: authReducer
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store;