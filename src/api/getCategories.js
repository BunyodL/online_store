export const getCategories = (builder) => {
  return builder.query({
    query: () => `categories`,
    providesTags: (result) =>
      result
        ? [...result.map(({ id }) => ({ type: 'Categories', id })), { type: 'Categories', id: 'LIST' }]
        : [{ type: 'Categories', id: 'LIST' }],
  });
};