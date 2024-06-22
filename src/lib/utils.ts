import colorConvert from "color-convert";

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { STORE_TO_CSS_VARS_MAPPING } from "@/constants";

import { TCSSVariable, TThemeKey } from "@/types/theme";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertHSLtoHEX(hsl: string) {
  const h = parseInt(hsl.split(" ")[0]);
  const s = parseInt(hsl.split(" ")[1]?.replace("%", ""));
  const l = parseInt(hsl.split(" ")[2]?.replace("%", ""));

  return `#${colorConvert.hsl.hex([h, s, l])}`;
}

export function convertHEXtoHSL(hsl: string) {
  const hslArr = colorConvert.hex.hsl(hsl);
  return `${hslArr[0]} ${hslArr[1]}% ${hslArr[2]}%`;
}

export const getCurrentValueForCSSVariable = (variable: TCSSVariable) => {
  if (!variable) {
    throw new Error("One or more fields are missing");
  }
  return getComputedStyle(document.documentElement).getPropertyValue(variable);
};

export const setValueToCSSVariable = (
  variable: TCSSVariable,
  value: string
) => {
  if (!(variable || value)) {
    throw new Error("One or more fields are missing");
  }
  (document.querySelector(":root") as HTMLElement)?.style.setProperty(
    variable,
    convertHEXtoHSL(value)
  );
  return true;
};

export const getCSSEquivalentOfVariable = (
  variable: TThemeKey
): TCSSVariable => {
  return STORE_TO_CSS_VARS_MAPPING[variable] as TCSSVariable;
};

export const copyToClipboard = async (value: string) => {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch (err) {
    return false;
  }
};
