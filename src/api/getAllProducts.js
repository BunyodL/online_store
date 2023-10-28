export const getAllProducts = (builder) => {
  return builder.query({
    query: () => 'products',
    providesTags: (result) =>
      result
        ? [...result.map(({ id }) => ({ type: 'Products', id })), { type: 'Products', id: 'LIST' }]
        : [{ type: 'Products', id: 'LIST' }],
  });
};
