import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getAllProducts } from './getAllProducts';
import { getCurrentProduct } from './getCurrentProduct';
import { authToStore } from './authToStore';

export const storeApi = createApi({
  reducerPath: 'storeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com/',
  }),
  tagTypes: ['Products', 'Auth'],
  endpoints: (builder) => ({
    getAllProducts: getAllProducts(builder),
    getCurrentProduct: getCurrentProduct(builder),
    authToStore: authToStore(builder),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetCurrentProductQuery,
  useAuthToStoreMutation
} = storeApi;
