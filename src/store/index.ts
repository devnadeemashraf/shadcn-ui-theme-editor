import { configureStore } from "@reduxjs/toolkit";

// Reducers
import themeSlice from "./themeSlice";

export const store = configureStore({
  reducer: {
    themeSlice,
  },
});

export type TAppState = ReturnType<typeof store.getState>;
