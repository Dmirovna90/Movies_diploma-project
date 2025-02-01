import { createSlice } from "@reduxjs/toolkit";

const carouselSlice = createSlice({
    name: 'carousel',
    initialState: {
        length: 10,
        currentSlider: 1,
    },
    reducers: {
        setIncrease: (state, action) => {
            state.length = action.payload > state.length ? 0 : action.payload;
        },
        setDecrease: (state, action) => {
            state.length = action.payload < 0 ? state.length : action.payload;
        },
        setSlider: (state, action) => {
            state.currentSlider = action.payload;
          },
    }
})
export const {setIncrease, setDecrease, setSlider} = carouselSlice.actions;
export default carouselSlice.reducer