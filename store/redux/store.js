import { configureStore } from "@reduxjs/toolkit";
import likedReducer from "./likes"

export const store = configureStore({
    reducer: {
        likeEvents: likedReducer
    }
});