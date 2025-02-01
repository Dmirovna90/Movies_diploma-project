import { createSlice } from "@reduxjs/toolkit";

const activeSlice = createSlice({
    name: 'active',
    initialState: {
        isActive: false,
        isClose: false,
    },
    reducers:{
        toggleActive(state) {
            if(!state.isActive) state.isActive = true
            else state.isActive = false
        },
        navActive(state) {
            if(!state.isClose) state.isClose = true
            else state.isClose = false
        },
    }
});
export const {toggleActive, navActive} = activeSlice.actions;
export default activeSlice.reducer;