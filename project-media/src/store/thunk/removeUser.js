import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeUser = createAsyncThunk('user/removeUser', async (user) => {
    await axios.delete(`http://localhost:3500/users/${user.id}`)
    
    return user;
})

export {removeUser};