import { createSlice } from "@reduxjs/toolkit";

const initialSearchState = {
    searchedData: '',
    searchedFilteredData: []
};

export const searchSlice = createSlice({
    name: 'searchSlice',
    initialState: initialSearchState,
    reducers: {
        searchUSer(state,action) {
            state.searchedData = action.payload;
        }
    }
});