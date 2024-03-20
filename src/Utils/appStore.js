import { configureStore } from "@reduxjs/toolkit";
import SearchReducer from './searchSlice';
import VideoReducer from './videoSlice';
const appStore = configureStore({
    reducer:{
        search:SearchReducer,
        video:VideoReducer
    }
}
   
);

export default appStore;