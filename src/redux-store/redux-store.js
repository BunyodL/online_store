import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/product-reducer";

const rootReducer = combineReducers({
  products: productReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store;