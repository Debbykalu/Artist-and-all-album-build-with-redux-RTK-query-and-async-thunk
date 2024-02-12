import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const blogPostApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500' }), 
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => 'users', 
    }),
    addPost: builder.mutation({
      query: (newPost) => ({
        url: '/users', 
        method: 'POST',
        body: newPost,
      }),
    }),
  }),
});

export const { useGetPostsQuery, useAddPostMutation } = blogPostApi;
