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

export type TProperty =
  | "default"
  | "background"
  | "foreground"
  | "card"
  | "cardForeground"
  | "popover"
  | "popoverForeground"
  | "primary"
  | "primaryForeground"
  | "secondary"
  | "secondaryForeground"
  | "muted"
  | "mutedForeground"
  | "accent"
  | "accentForeground"
  | "destructive"
  | "destructiveForeground"
  | "border"
  | "input"
  | "ring"
  | "radius";
