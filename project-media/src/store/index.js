import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './sclices/UsersSlice';

export const store = configureStore({
    reducer: {
        users: usersReducer,
    }
});

export * from './thunk/fetchUsers';
export * from './thunk/addUsers';