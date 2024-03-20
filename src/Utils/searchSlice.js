import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        items: '',
    },
    reducers: {
        searchContent: (state, action) => {
            state.items = action.payload;
        }
    }
});

export const {searchContent}=searchSlice.actions;

export default searchSlice.reducer;