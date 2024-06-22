import { Clipboard, Import } from "lucide-react";

import { TActions } from "./_types";
import { handleOnClickCopyBtn } from "./_utils";

const actions: TActions = [
  {
    primary: false,
    label: "Import",
    icon: Import,
    tooltip: "Import Theme",
  },
  {
    primary: true,
    label: "Copy",
    icon: Clipboard,
    tooltip: "Copy Theme",
    onClick: handleOnClickCopyBtn,
  },
];

const swatchVariables = [
  { name: "background" },
  { name: "foreground" },
  { name: "card" },
  { name: "card_foreground" },
  { name: "popover" },
  { name: "popover_foreground" },
  { name: "primary" },
  { name: "primary_foreground" },
  { name: "secondary" },
  { name: "secondary_foreground" },
  { name: "muted" },
  { name: "muted_foreground" },
  { name: "accent" },
  { name: "accent_foreground" },
  { name: "destructive" },
  { name: "destructive_foreground" },
  { name: "border" },
  { name: "input" },
  { name: "ring" },
  { name: "radius" },
];

export { actions, swatchVariables };
