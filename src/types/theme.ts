export type TSetTheme = {
  background: string | null;
  foreground: string | null;
  card: string | null;
  cardForeground: string | null;
  popover: string | null;
  popoverForeground: string | null;
  primary: string | null;
  primaryForeground: string | null;
  secondary: string | null;
  secondaryForeground: string | null;
  muted: string | null;
  mutedForeground: string | null;
  accent: string | null;
  accentForeground: string | null;
  destructive: string | null;
  destructiveForeground: string | null;
  border: string | null;
  input: string | null;
  ring: string | null;
  radius: string | null;
};

export type TStateProperties =
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

export type TRootProperties =
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
