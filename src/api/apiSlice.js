import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getAllProducts } from './getAllProducts';
import { getCurrentProduct } from './getCurrentProduct';
import { loginToStore } from './loginToStore';
import { getCategories } from './getCategories';
import { createAnAccount } from './createAnAccount';

export const storeApi = createApi({
  reducerPath: 'storeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.escuelajs.co/api/v1/',
  }),
  tagTypes: ['Products', 'Categories', 'Auth'],
  endpoints: (builder) => ({
    getAllProducts: getAllProducts(builder),
    getCurrentProduct: getCurrentProduct(builder),
    getCategories: getCategories(builder),
    loginToStore: loginToStore(builder),
    createAnAccount: createAnAccount(builder),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetCurrentProductQuery,
  useGetCategoriesQuery,
  useLoginToStoreMutation,
  useCreateAnAccountMutation,
} = storeApi;
