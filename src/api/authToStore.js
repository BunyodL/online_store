export const authToStore = (builder) => {
  return builder.mutation({
    query: (authData) => ({
      url: 'auth/login',
      method: 'POST',
      body: { username: authData.email, password: authData.password },
    }),
    invalidatesTags: [{ type: 'Auth', id: 'LIST' }],
    transformResponse: (response, meta, arg) => response.token,
    transformErrorResponse: (response, meta, arg) => response,
  });
};
