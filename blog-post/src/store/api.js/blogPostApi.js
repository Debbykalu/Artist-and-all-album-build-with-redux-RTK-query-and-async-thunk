import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const blogPostApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500' }), 
  endpoints: (builder) => ({
    getPosts: builder.query({
      providesTags: (result, error, user) => {
        const tags = result.map((post) => {
          if (post && post.id) {
            return { type: 'user', id: post.id };
          }
          return null; 
        }).filter(Boolean); 
      
        if (user && user.id) {
          tags.push({ type: 'CreateUser', id: user.id });
        }
      
        return tags;
      },
      
      
      query: () => 'users', 
    }),
    addPost: builder.mutation({
      invalidatesTags: (result, error, user) => {
        return [{ type: 'CreateUser', id: user.id }]
    },
      query: (post) => ({
        url: '/users', 
        method: 'POST',
        body: post,
      }),
    }),
    removePost: builder.mutation({
      invalidatesTags: (result, error, user) => {
        if (user && user.id) {
          return [{ type: 'user', id: user.id }];
        }
        return [];
      },
      query: (user) => {
        return {
          url: `/users/${user.id}`,
          method: 'DELETE',
        };
      },
    }),
    updatePost: builder.mutation({
      invalidatesTags: (result, error, user) => {
        if (user && user.id) {
          return [{ type: 'user', id: user.id }];
        }
        return [];
      },
      query: ({ id, ...post }) => ({
        url: `/users/${id}`,
        method: 'PATCH', 
        body: post,
      }),
    }),     
  }),
});

export const { useGetPostsQuery, useAddPostMutation, useRemovePostMutation,useUpdatePostMutation  } = blogPostApi;
