import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: 'video',
    initialState: {
        items: {},
    },
    reducers: {
        videoContent: (state, action) => {
            state.items = action.payload;
        }
    }
});

export const {videoContent}=videoSlice.actions;

export default videoSlice.reducer;