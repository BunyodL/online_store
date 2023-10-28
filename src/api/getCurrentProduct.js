export const getCurrentProduct = (builder) => {
  return builder.query({
    query: (productId) => `products/${productId}`,
    providesTags: (result, error, id) => [{ type: 'Products', id }],
  });
};
