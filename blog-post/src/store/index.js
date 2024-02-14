import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { blogPostApi } from './api.js/blogPostApi';

export const store = configureStore({
  reducer: {
    [blogPostApi.reducerPath]: blogPostApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(blogPostApi.middleware),
});

setupListeners(store.dispatch)

export { 
  useGetPostsQuery, 
  useAddPostMutation,
  useRemovePostMutation 
} from './api.js/blogPostApi'




