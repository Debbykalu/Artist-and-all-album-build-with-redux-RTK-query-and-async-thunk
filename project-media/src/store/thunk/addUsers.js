import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";

const addUsers = createAsyncThunk('user/add', async () => {
    const response = await axios.post('http://localhost:3500/users', {
        name: faker.name.fullName()
    });

    return response.data;
})

export { addUsers };