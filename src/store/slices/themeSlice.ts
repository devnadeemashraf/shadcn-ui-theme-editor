import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { DEFAULT_THEME_STATE } from "@/constants";
import { TThemeState } from "@/types/theme";

const initialState = {
  value: DEFAULT_THEME_STATE,
  loading: true,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleLoading: (currState, action: PayloadAction<boolean>) => {
      currState.loading = action.payload;
    },
    setValue: (currState, action: PayloadAction<TThemeState>) => {
      currState.value = action.payload;
    },
  },
});

export const { toggleLoading, setValue } = themeSlice.actions;
export default themeSlice.reducer;
