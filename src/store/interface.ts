import { TThemeState } from "@/types/theme";
import { INIT_THEME, RESET_THEME, TOGGLE_LOADING } from "./constants";

export interface ToggleLoadingAction {
  type: typeof TOGGLE_LOADING;
  payload: boolean;
}

export interface ResetThemeAction {
  type: typeof RESET_THEME;
}

export interface InitThemeAction {
  type: typeof INIT_THEME;
  payload: TThemeState;
}

export type ThemeActionType =
  | InitThemeAction
  | ResetThemeAction
  | ToggleLoadingAction;
