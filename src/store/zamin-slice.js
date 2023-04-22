import { createSlice } from "@reduxjs/toolkit";

const getAllZamins = () => {
    const allZamin = window.localStorage.getItem('zamins');
    if(allZamin) {
        return JSON.parse(allZamin);
    }else{
        return [];
    }
};

const initialUserState = {
    zamins: getAllZamins(),
};

export const zaminSlice = createSlice({
    name: 'zaminSlice',
    initialState: initialUserState,
    reducers: {
        addZamin(state,action) {
            state.zamins = [...state.zamins, action.payload];
        },
    },
});

export const zaminSliceAction = zaminSlice.actions;