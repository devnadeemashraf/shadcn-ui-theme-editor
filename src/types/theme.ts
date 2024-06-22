import { DEFAULT_THEME_STATE } from "@/constants";

export type TTheme = "light" | "dark";
export type TThemeState = typeof DEFAULT_THEME_STATE;

export type TThemeKey =
  | "background"
  | "foreground"
  | "card"
  | "card_foreground"
  | "popover"
  | "popover_foreground"
  | "primary"
  | "primary_foreground"
  | "secondary"
  | "secondary_foreground"
  | "muted"
  | "muted_foreground"
  | "accent"
  | "accent_foreground"
  | "destructive"
  | "destructive_foreground"
  | "border"
  | "input"
  | "ring"
  | "radius";

export type TCSSVariable =
  | "--background"
  | "--foreground"
  | "--card"
  | "--card-foreground"
  | "--popover"
  | "--popover-foreground"
  | "--primary"
  | "--primary-foreground"
  | "--secondary"
  | "--secondary-foreground"
  | "--muted"
  | "--muted-foreground"
  | "--accent"
  | "--accent-foreground"
  | "--destructive"
  | "--destructive-foreground"
  | "--border"
  | "--input"
  | "--ring"
  | "--radius";
