import { ROOT_PROPERTY_NAME } from "@/types/enum";
import { TRootProperties, TStateProperties } from "@/types/theme";
import { convertHSLtoHEX_Updated } from "./utils";

/* eslint-disable @typescript-eslint/no-unused-vars */
const root_theme: HTMLElement | null = document.querySelector(":root");
const appStyle: CSSStyleDeclaration = getComputedStyle(document.body);

export const getCurrentValueForProperty = (property: TStateProperties) => {
  switch (property) {
    case "background": {
      const currValue = appStyle.getPropertyValue(
        ROOT_PROPERTY_NAME.BACKGROUND
      );
      return convertHSLtoHEX_Updated(currValue);
    }
    case "foreground": {
      const currValue = appStyle.getPropertyValue(
        ROOT_PROPERTY_NAME.FOREGROUND
      );
      return convertHSLtoHEX_Updated(currValue);
    }
    case "card": {
      const currValue = appStyle.getPropertyValue(ROOT_PROPERTY_NAME.CARD);
      return convertHSLtoHEX_Updated(currValue);
    }
    case "card_foreground": {
      const currValue = appStyle.getPropertyValue(
        ROOT_PROPERTY_NAME.CARD_FOREGROUND
      );
      return convertHSLtoHEX_Updated(currValue);
    }
    case "popover": {
      const currValue = appStyle.getPropertyValue(ROOT_PROPERTY_NAME.POPOVER);
      return convertHSLtoHEX_Updated(currValue);
    }
    case "popover_foreground": {
      const currValue = appStyle.getPropertyValue(
        ROOT_PROPERTY_NAME.POPOVER_FOREGROUND
      );
      return convertHSLtoHEX_Updated(currValue);
    }
    case "primary": {
      const currValue = appStyle.getPropertyValue(ROOT_PROPERTY_NAME.PRIMARY);
      return convertHSLtoHEX_Updated(currValue);
    }
    case "primary_foreground": {
      const currValue = appStyle.getPropertyValue(
        ROOT_PROPERTY_NAME.PRIMARY_FOREGROUND
      );
      return convertHSLtoHEX_Updated(currValue);
    }
    case "secondary": {
      const currValue = appStyle.getPropertyValue(ROOT_PROPERTY_NAME.SECONDARY);
      return convertHSLtoHEX_Updated(currValue);
    }
    case "secondary_foreground": {
      const currValue = appStyle.getPropertyValue(
        ROOT_PROPERTY_NAME.SECONDARY_FOREGROUND
      );
      return convertHSLtoHEX_Updated(currValue);
    }
    case "muted": {
      const currValue = appStyle.getPropertyValue(ROOT_PROPERTY_NAME.MUTED);
      return convertHSLtoHEX_Updated(currValue);
    }
    case "muted_foreground": {
      const currValue = appStyle.getPropertyValue(
        ROOT_PROPERTY_NAME.MUTED_FOREGROUND
      );
      return convertHSLtoHEX_Updated(currValue);
    }
    case "accent": {
      const currValue = appStyle.getPropertyValue(ROOT_PROPERTY_NAME.ACCENT);
      return convertHSLtoHEX_Updated(currValue);
    }
    case "accent_foreground": {
      const currValue = appStyle.getPropertyValue(
        ROOT_PROPERTY_NAME.ACCENT_FOREGROUND
      );
      return convertHSLtoHEX_Updated(currValue);
    }
    case "destructive": {
      const currValue = appStyle.getPropertyValue(
        ROOT_PROPERTY_NAME.DESTRUCTIVE
      );
      return convertHSLtoHEX_Updated(currValue);
    }
    case "destructive_foreground": {
      const currValue = appStyle.getPropertyValue(
        ROOT_PROPERTY_NAME.DESTRUCTIVE_FOREGROUND
      );
      return convertHSLtoHEX_Updated(currValue);
    }
    case "border": {
      const currValue = appStyle.getPropertyValue(ROOT_PROPERTY_NAME.BORDER);
      return convertHSLtoHEX_Updated(currValue);
    }
    case "input": {
      const currValue = appStyle.getPropertyValue(ROOT_PROPERTY_NAME.INPUT);
      return convertHSLtoHEX_Updated(currValue);
    }
    case "ring": {
      const currValue = appStyle.getPropertyValue(ROOT_PROPERTY_NAME.RING);
      return convertHSLtoHEX_Updated(currValue);
    }
    case "radius": {
      const currValue = appStyle.getPropertyValue(ROOT_PROPERTY_NAME.RADIUS);
      return currValue;
    }
  }
};

export const getCurrentValueForPropertyUpdated = (
  property: TRootProperties
) => {
  switch (property) {
    case "--background": {
      const currValue = appStyle.getPropertyValue(
        ROOT_PROPERTY_NAME.BACKGROUND
      );
      return convertHSLtoHEX_Updated(currValue);
    }
    case "--foreground": {
      const currValue = appStyle.getPropertyValue(
        ROOT_PROPERTY_NAME.FOREGROUND
      );
      return convertHSLtoHEX_Updated(currValue);
    }
    case "--card": {
      const currValue = appStyle.getPropertyValue(ROOT_PROPERTY_NAME.CARD);
      return convertHSLtoHEX_Updated(currValue);
    }
    case "--card-foreground": {
      const currValue = appStyle.getPropertyValue(
        ROOT_PROPERTY_NAME.CARD_FOREGROUND
      );
      return convertHSLtoHEX_Updated(currValue);
    }
    case "--popover": {
      const currValue = appStyle.getPropertyValue(ROOT_PROPERTY_NAME.POPOVER);
      return convertHSLtoHEX_Updated(currValue);
    }
    case "--popover-foreground": {
      const currValue = appStyle.getPropertyValue(
        ROOT_PROPERTY_NAME.POPOVER_FOREGROUND
      );
      return convertHSLtoHEX_Updated(currValue);
    }
    case "--primary": {
      const currValue = appStyle.getPropertyValue(ROOT_PROPERTY_NAME.PRIMARY);
      return convertHSLtoHEX_Updated(currValue);
    }
    case "--primary-foreground": {
      const currValue = appStyle.getPropertyValue(
        ROOT_PROPERTY_NAME.PRIMARY_FOREGROUND
      );
      return convertHSLtoHEX_Updated(currValue);
    }
    case "--secondary": {
      const currValue = appStyle.getPropertyValue(ROOT_PROPERTY_NAME.SECONDARY);
      return convertHSLtoHEX_Updated(currValue);
    }
    case "--secondary-foreground": {
      const currValue = appStyle.getPropertyValue(
        ROOT_PROPERTY_NAME.SECONDARY_FOREGROUND
      );
      return convertHSLtoHEX_Updated(currValue);
    }
    case "--muted": {
      const currValue = appStyle.getPropertyValue(ROOT_PROPERTY_NAME.MUTED);
      return convertHSLtoHEX_Updated(currValue);
    }
    case "--muted-foreground": {
      const currValue = appStyle.getPropertyValue(
        ROOT_PROPERTY_NAME.MUTED_FOREGROUND
      );
      return convertHSLtoHEX_Updated(currValue);
    }
    case "--accent": {
      const currValue = appStyle.getPropertyValue(ROOT_PROPERTY_NAME.ACCENT);
      return convertHSLtoHEX_Updated(currValue);
    }
    case "--accent-foreground": {
      const currValue = appStyle.getPropertyValue(
        ROOT_PROPERTY_NAME.ACCENT_FOREGROUND
      );
      return convertHSLtoHEX_Updated(currValue);
    }
    case "--destructive": {
      const currValue = appStyle.getPropertyValue(
        ROOT_PROPERTY_NAME.DESTRUCTIVE
      );
      return convertHSLtoHEX_Updated(currValue);
    }
    case "--destructive-foreground": {
      const currValue = appStyle.getPropertyValue(
        ROOT_PROPERTY_NAME.DESTRUCTIVE_FOREGROUND
      );
      return convertHSLtoHEX_Updated(currValue);
    }
    case "--border": {
      const currValue = appStyle.getPropertyValue(ROOT_PROPERTY_NAME.BORDER);
      return convertHSLtoHEX_Updated(currValue);
    }
    case "--input": {
      const currValue = appStyle.getPropertyValue(ROOT_PROPERTY_NAME.INPUT);
      return convertHSLtoHEX_Updated(currValue);
    }
    case "--ring": {
      const currValue = appStyle.getPropertyValue(ROOT_PROPERTY_NAME.RING);
      return convertHSLtoHEX_Updated(currValue);
    }
    case "--radius": {
      const currValue = appStyle.getPropertyValue(ROOT_PROPERTY_NAME.RADIUS);
      return currValue;
    }
  }
};

export const setTheme = (property: TStateProperties, value: string | "all") => {
  switch (property) {
    case "background": {
      // Set background
      root_theme?.style.setProperty(ROOT_PROPERTY_NAME.BACKGROUND, value);
      break;
    }
    case "foreground": {
      // Set foreground
      root_theme?.style.setProperty(ROOT_PROPERTY_NAME.FOREGROUND, value);
      break;
    }
    case "card": {
      // Set card
      root_theme?.style.setProperty(ROOT_PROPERTY_NAME.CARD, value);
      break;
    }
    case "card_foreground": {
      // Set cardForeground
      root_theme?.style.setProperty(ROOT_PROPERTY_NAME.CARD_FOREGROUND, value);
      break;
    }
    case "popover": {
      // Set popover
      root_theme?.style.setProperty(ROOT_PROPERTY_NAME.POPOVER, value);
      break;
    }
    case "popover_foreground": {
      // Set popoverForeground
      root_theme?.style.setProperty(
        ROOT_PROPERTY_NAME.POPOVER_FOREGROUND,
        value
      );
      break;
    }
    case "primary": {
      root_theme?.style.setProperty(ROOT_PROPERTY_NAME.PRIMARY, value);
      break;
    }
    case "primary_foreground": {
      root_theme?.style.setProperty(
        ROOT_PROPERTY_NAME.PRIMARY_FOREGROUND,
        value
      );
      break;
    }
    case "secondary": {
      const currValue = appStyle.getPropertyValue(ROOT_PROPERTY_NAME.SECONDARY);
      return convertHSLtoHEX_Updated(currValue);
    }
    case "secondary_foreground": {
      const currValue = appStyle.getPropertyValue(
        ROOT_PROPERTY_NAME.SECONDARY_FOREGROUND
      );
      return convertHSLtoHEX_Updated(currValue);
    }
    case "muted": {
      const currValue = appStyle.getPropertyValue(ROOT_PROPERTY_NAME.MUTED);
      return convertHSLtoHEX_Updated(currValue);
    }
    case "muted_foreground": {
      const currValue = appStyle.getPropertyValue(
        ROOT_PROPERTY_NAME.MUTED_FOREGROUND
      );
      return convertHSLtoHEX_Updated(currValue);
    }
    case "accent": {
      // Set accent
      root_theme?.style.setProperty(ROOT_PROPERTY_NAME.ACCENT, value);
      break;
    }
    case "accent_foreground": {
      // Set accentForeground
      root_theme?.style.setProperty(
        ROOT_PROPERTY_NAME.ACCENT_FOREGROUND,
        value
      );
      break;
    }
    case "destructive": {
      // Set destructive
      root_theme?.style.setProperty(ROOT_PROPERTY_NAME.DESTRUCTIVE, value);
      break;
    }
    case "destructive_foreground": {
      // Set destructive
      root_theme?.style.setProperty(
        ROOT_PROPERTY_NAME.DESTRUCTIVE_FOREGROUND,
        value
      );
      break;
    }
    case "border": {
      // Set border
      root_theme?.style.setProperty(ROOT_PROPERTY_NAME.BORDER, value);
      break;
    }
    case "input": {
      // Set input
      root_theme?.style.setProperty(ROOT_PROPERTY_NAME.INPUT, value);
      break;
    }
    case "ring": {
      // Set ring
      root_theme?.style.setProperty(ROOT_PROPERTY_NAME.RING, value);
      break;
    }
    case "radius": {
      // Set radius
      root_theme?.style.setProperty(ROOT_PROPERTY_NAME.RADIUS, value);
      break;
    }
    default: {
      // Set default
      root_theme?.style.setProperty(ROOT_PROPERTY_NAME.BACKGROUND, value);
      root_theme?.style.setProperty(ROOT_PROPERTY_NAME.FOREGROUND, value);
      root_theme?.style.setProperty(ROOT_PROPERTY_NAME.FOREGROUND, value);
      root_theme?.style.setProperty(ROOT_PROPERTY_NAME.FOREGROUND, value);
      root_theme?.style.setProperty(ROOT_PROPERTY_NAME.FOREGROUND, value);
      root_theme?.style.setProperty(ROOT_PROPERTY_NAME.FOREGROUND, value);
      root_theme?.style.setProperty(ROOT_PROPERTY_NAME.FOREGROUND, value);
      root_theme?.style.setProperty(ROOT_PROPERTY_NAME.FOREGROUND, value);
      root_theme?.style.setProperty(ROOT_PROPERTY_NAME.FOREGROUND, value);
      root_theme?.style.setProperty(ROOT_PROPERTY_NAME.FOREGROUND, value);
      root_theme?.style.setProperty(ROOT_PROPERTY_NAME.FOREGROUND, value);
      root_theme?.style.setProperty(ROOT_PROPERTY_NAME.FOREGROUND, value);
      root_theme?.style.setProperty(ROOT_PROPERTY_NAME.FOREGROUND, value);
      root_theme?.style.setProperty(ROOT_PROPERTY_NAME.FOREGROUND, value);
      root_theme?.style.setProperty(ROOT_PROPERTY_NAME.FOREGROUND, value);
      root_theme?.style.setProperty(ROOT_PROPERTY_NAME.FOREGROUND, value);
      root_theme?.style.setProperty(ROOT_PROPERTY_NAME.FOREGROUND, value);
      root_theme?.style.setProperty(ROOT_PROPERTY_NAME.FOREGROUND, value);
      root_theme?.style.setProperty(ROOT_PROPERTY_NAME.FOREGROUND, value);
      root_theme?.style.setProperty(ROOT_PROPERTY_NAME.FOREGROUND, value);
    }
  }
};
