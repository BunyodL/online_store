import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/products-reducer";
import authReducer from "./reducers/auth-reducer";
import sequenceReducer from "./reducers/sequence-reducer";
import headerReducer from './reducers/header-reducer';
import { storeApi } from "../api/apiSlice";
import modalReducer from "./reducers/modal-reducer";

const rootReducer = combineReducers({
  products: productsReducer,
  auth: authReducer,
  sequence: sequenceReducer,
  header: headerReducer,
  modal: modalReducer,
  [storeApi.reducerPath]: storeApi.reducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(storeApi.middleware),
})

export default store;