export const createAnAccount = (builder) => {
  return builder.mutation({
    query: (authData) => ({
      url: 'users',
      method: 'POST',
      body: authData,
    }),
    invalidatesTags: [{ type: 'Auth', id: 'LIST' }],
    transformResponse: (response, meta, arg) => {
      // localStorage.setItem('token', response.token)
      return response.token
    },
    transformErrorResponse: (response, meta, arg) => response,
  });
};
