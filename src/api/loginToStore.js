export const authToStore = (builder) => {
  return builder.mutation({
    query: (authData) => ({
      url: 'auth/login',
      method: 'POST',
      body: authData,
    }),
    invalidatesTags: [{ type: 'Auth', id: 'LIST' }],
    transformResponse: (response, meta, arg) => {
      localStorage.setItem('token', response.token)
      return response.token
    },
    transformErrorResponse: (response, meta, arg) => response,
  });
};
