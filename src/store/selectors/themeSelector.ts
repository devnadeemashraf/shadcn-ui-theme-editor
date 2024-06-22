import { RootState } from "@/store";

export const selectTheme = (state: RootState) => state.theme.value;
export const selectThemeLoading = (state: RootState) => state.theme.loading;
