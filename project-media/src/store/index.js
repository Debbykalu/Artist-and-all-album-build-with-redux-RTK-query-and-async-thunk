import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './sclices/UsersSlice';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { albumApi } from './apis/albumApi';
import { photoApi } from './apis/photoApi';

export const store = configureStore({
    reducer: {
        users: usersReducer,
        [albumApi.reducerPath]: albumApi.reducer,
        [photoApi.reducerPath]: photoApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(albumApi.middleware)
            .concat(photoApi.middleware);
    },
    
});

setupListeners(store.dispatch)

export * from './thunk/fetchUsers';
export * from './thunk/addUsers';
export * from './thunk/removeUser';
export { 
    useFetchAlbumsQuery,
    useAddAlbumMutation,
    useRemoveAlbumMutation,
} from './apis/albumApi';

export {
    useFetchPhotosQuery, 
    useAddPhotoMutation,
    useRemovePhotoMutation,
} from './apis/photoApi'