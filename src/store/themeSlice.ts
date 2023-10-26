import { createSlice } from "@reduxjs/toolkit";
import { getCurrentValueForPropertyUpdated } from "@/lib/theme";

import { TStateProperties } from "@/types/theme";

type TFuncSetThemePropertyPayload = {
  property: TStateProperties;
  value: string;
};

const initialState = {
  background: getCurrentValueForPropertyUpdated("--background"),
  foreground: getCurrentValueForPropertyUpdated("--foreground"),
  card: getCurrentValueForPropertyUpdated("--card"),
  card_foreground: getCurrentValueForPropertyUpdated("--card-foreground"),
  popover: getCurrentValueForPropertyUpdated("--popover"),
  popover_foreground: getCurrentValueForPropertyUpdated(
    "--popover-foreground"
  ),
  primary: getCurrentValueForPropertyUpdated("--primary"),
  primary_foreground: getCurrentValueForPropertyUpdated("--primary-foreground"),
  secondary: getCurrentValueForPropertyUpdated("--secondary"),
  secondary_foreground: getCurrentValueForPropertyUpdated(
    "--secondary-foreground"
  ),
  muted: getCurrentValueForPropertyUpdated("--muted"),
  muted_foreground: getCurrentValueForPropertyUpdated("--muted-foreground"),
  accent: getCurrentValueForPropertyUpdated("--accent"),
  accent_foreground: getCurrentValueForPropertyUpdated("--accent-foreground"),
  destructive: getCurrentValueForPropertyUpdated("--destructive"),
  destructive_foreground: getCurrentValueForPropertyUpdated(
    "--destructive-foreground"
  ),
  border: getCurrentValueForPropertyUpdated("--border"),
  input: getCurrentValueForPropertyUpdated("--input"),
  ring: getCurrentValueForPropertyUpdated("--ring"),
  radius: getCurrentValueForPropertyUpdated("--radius"),
};

export const themeSlice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {
    initializeAppTheme: (currentState) => {
      currentState.background =
        getCurrentValueForPropertyUpdated("--background");
      currentState.foreground =
        getCurrentValueForPropertyUpdated("--foreground");
      currentState.card = getCurrentValueForPropertyUpdated("--card");
      currentState.card_foreground =
        getCurrentValueForPropertyUpdated("--card-foreground");
      currentState.popover = getCurrentValueForPropertyUpdated("--popover");
      currentState.popover_foreground = getCurrentValueForPropertyUpdated(
        "--popover-foreground"
      );
      currentState.primary = getCurrentValueForPropertyUpdated("--primary");
      currentState.primary_foreground = getCurrentValueForPropertyUpdated(
        "--primary-foreground"
      );
      currentState.secondary = getCurrentValueForPropertyUpdated("--secondary");
      currentState.secondary_foreground = getCurrentValueForPropertyUpdated(
        "--secondary-foreground"
      );
      currentState.muted = getCurrentValueForPropertyUpdated("--muted");
      currentState.muted_foreground =
        getCurrentValueForPropertyUpdated("--muted-foreground");
      currentState.accent = getCurrentValueForPropertyUpdated("--accent");
      currentState.accent_foreground = getCurrentValueForPropertyUpdated(
        "--accent-foreground"
      );
      currentState.destructive =
        getCurrentValueForPropertyUpdated("--destructive");
      currentState.destructive_foreground = getCurrentValueForPropertyUpdated(
        "--destructive-foreground"
      );
      currentState.border = getCurrentValueForPropertyUpdated("--border");
      currentState.input = getCurrentValueForPropertyUpdated("--input");
      currentState.ring = getCurrentValueForPropertyUpdated("--ring");
      currentState.radius = getCurrentValueForPropertyUpdated("--radius");
    },
    setThemeProperty: (
      currentState,
      { payload }: { payload: TFuncSetThemePropertyPayload }
    ) => {
      currentState[payload.property] = payload.value;
    },
  },
});

export const { initializeAppTheme, setThemeProperty } = themeSlice.actions;
export default themeSlice.reducer;
