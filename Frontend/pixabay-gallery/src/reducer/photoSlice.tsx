import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Photo {
    id: number;
    webformatURL: string;
    views: number;
    downloads: number;
    collections: number;
}

interface PhotosState {
    items: Photo[];
    category: string;
    page: number;
}

const initialState: PhotosState = {
    items: [],
    category: "sports",
    page: 1,
}

const photoSlice = createSlice({

    name: "photos",
    initialState,
    reducers: {
        setPhotos(state, action: PayloadAction<Photo[]>) {
            state.items = action.payload;
        },

        setCategory(state, action: PayloadAction<string>) {
            state.category = action.payload;
            state.page = 1;
        },

        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload;
        }

    }
})

export const { setPhotos, setPage, setCategory } = photoSlice.actions;
export default photoSlice.reducer;