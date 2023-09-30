import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/products-reducer";
import authReducer from "./reducers/auth-reducer";
import sequenceReducer from "./reducers/sequence-reducer";
import cartReducer from "./reducers/cart-reducer";
import headerReducer from './reducers/header-reducer';

const rootReducer = combineReducers({
  products: productsReducer,
  auth: authReducer,
  sequence: sequenceReducer,
  cart: cartReducer,
  header: headerReducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store;