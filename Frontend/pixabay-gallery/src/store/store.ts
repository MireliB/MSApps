import { configureStore } from "@reduxjs/toolkit";
import photoReducer from '../reducer/photoSlice';

export const store = configureStore({
    reducer: {
        photos: photoReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch; 