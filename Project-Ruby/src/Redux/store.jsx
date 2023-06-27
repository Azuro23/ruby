import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./userSlicer";
import projectReducer from "./projectSlicer";

export const store = configureStore({
    reducer: {
        user: userReducer,
        projects: projectReducer,
    }
})