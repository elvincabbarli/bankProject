import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
    users: [],
};

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialUserState,
    reducers: {
        addUser(state,action) {
            state.users = [...state.users, action.payload];
        }
    }
});