import { ROOT_PROPERTY_NAME } from "@/types/enum";
import { TProperty } from "@/types/theme";

/* eslint-disable @typescript-eslint/no-unused-vars */
const root_theme: HTMLElement | null = document.querySelector(":root");
const appStyle: CSSStyleDeclaration = getComputedStyle(document.body);

export const getCurrentValueForProperty = (property: TProperty) => {
  switch (property) {
    case "background": {
      const currValue = appStyle.getPropertyValue(
        ROOT_PROPERTY_NAME.BACKGROUND
      );
      return currValue;
    }
    case "foreground": {
      const currValue = appStyle.getPropertyValue(
        ROOT_PROPERTY_NAME.FOREGROUND
      );
      return currValue;
    }
    case "card": {
      const currValue = appStyle.getPropertyValue(ROOT_PROPERTY_NAME.CARD);
      return currValue;
    }
    case "cardForeground": {
      const currValue = appStyle.getPropertyValue(
        ROOT_PROPERTY_NAME.CARD_FOREGROUND
      );
      return currValue;
    }
    case "popover": {
      const currValue = appStyle.getPropertyValue(ROOT_PROPERTY_NAME.POPOVER);
      return currValue;
    }
    case "popoverForeground": {
      const currValue = appStyle.getPropertyValue(
        ROOT_PROPERTY_NAME.POPOVER_FOREGROUND
      );
      return currValue;
    }
    case "primary": {
      const currValue = appStyle.getPropertyValue(ROOT_PROPERTY_NAME.PRIMARY);
      return currValue;
    }
    case "primaryForeground": {
      const currValue = appStyle.getPropertyValue(
        ROOT_PROPERTY_NAME.PRIMARY_FOREGROUND
      );
      return currValue;
    }
    case "secondary": {
      const currValue = appStyle.getPropertyValue(ROOT_PROPERTY_NAME.SECONDARY);
      return currValue;
    }
    case "secondaryForeground": {
      const currValue = appStyle.getPropertyValue(
        ROOT_PROPERTY_NAME.SECONDARY_FOREGROUND
      );
      return currValue;
    }
    case "muted": {
      const currValue = appStyle.getPropertyValue(ROOT_PROPERTY_NAME.MUTED);
      return currValue;
    }
    case "mutedForeground": {
      const currValue = appStyle.getPropertyValue(
        ROOT_PROPERTY_NAME.MUTED_FOREGROUND
      );
      return currValue;
    }
    case "accent": {
      const currValue = appStyle.getPropertyValue(ROOT_PROPERTY_NAME.ACCENT);
      return currValue;
    }
    case "accentForeground": {
      const currValue = appStyle.getPropertyValue(
        ROOT_PROPERTY_NAME.ACCENT_FOREGROUND
      );
      return currValue;
    }
    case "destructive": {
      const currValue = appStyle.getPropertyValue(
        ROOT_PROPERTY_NAME.DESTRUCTIVE
      );
      return currValue;
    }
    case "destructiveForeground": {
      const currValue = appStyle.getPropertyValue(
        ROOT_PROPERTY_NAME.DESTRUCTIVE_FOREGROUND
      );
      return currValue;
    }
    case "border": {
      const currValue = appStyle.getPropertyValue(ROOT_PROPERTY_NAME.BORDER);
      return currValue;
    }
    case "input": {
      const currValue = appStyle.getPropertyValue(ROOT_PROPERTY_NAME.INPUT);
      return currValue;
    }
    case "ring": {
      const currValue = appStyle.getPropertyValue(ROOT_PROPERTY_NAME.RING);
      return currValue;
    }
    case "radius": {
      const currValue = appStyle.getPropertyValue(ROOT_PROPERTY_NAME.RADIUS);
      return currValue;
    }
  }
};

export const setTheme = (property: TProperty, value: string | "all") => {
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
    case "cardForeground": {
      // Set cardForeground
      root_theme?.style.setProperty(ROOT_PROPERTY_NAME.CARD_FOREGROUND, value);
      break;
    }
    case "popover": {
      // Set popover
      root_theme?.style.setProperty(ROOT_PROPERTY_NAME.POPOVER, value);
      break;
    }
    case "popoverForeground": {
      // Set popoverForeground
      root_theme?.style.setProperty(
        ROOT_PROPERTY_NAME.POPOVER_FOREGROUND,
        value
      );
      break;
    }
    case "accent": {
      // Set accent
      root_theme?.style.setProperty(ROOT_PROPERTY_NAME.ACCENT, value);
      break;
    }
    case "accentForeground": {
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
    case "destructiveForeground": {
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
