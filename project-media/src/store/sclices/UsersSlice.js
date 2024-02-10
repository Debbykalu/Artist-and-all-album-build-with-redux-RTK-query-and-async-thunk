import { createSlice} from '@reduxjs/toolkit';
import { fetchUsers } from '../thunk/fetchUsers';
import { addUsers } from '../thunk/addUsers';

const UsersSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
    },

    extraReducers(builder){
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });

        builder.addCase(addUsers.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(addUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data.push(action.payload)
        });
        builder.addCase(addUsers.rejected, (state, action) => {
            state.error = action.error;
        });
    }
});

export const usersReducer = UsersSlice.reducer;