import { createSlice } from "@reduxjs/toolkit";

const initialStepState = {
    step: 1,
    finalData: {},
};

export const stepSlice = createSlice({
    name: 'stepSlice',
    initialState: initialStepState,
    reducers: {
        changeStep(state,action) {
            state.step = action.payload;
        },
        getUserData(state,action) {
            state.finalData = {...state.finalData, ...action.payload};
        }
    },
});

export const stepSliceAction = stepSlice.actions;