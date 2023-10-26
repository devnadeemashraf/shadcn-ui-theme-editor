import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import colorConvert from "color-convert";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertHSLtoHEX_Updated(hsl: string) {
  const h = parseInt(hsl.split(" ")[0]);
  const s = parseInt(hsl.split(" ")[1]?.replace("%", ""));
  const l = parseInt(hsl.split(" ")[2]?.replace("%", ""));

  return `#${colorConvert.hsl.hex([h, s, l])}`;
}

export function convertHEXtoHSL_Updated(hex: string) {
  const hslArr = colorConvert.hex.hsl(hex);
  return `${hslArr[0]} ${hslArr[1]}% ${hslArr[2]}%`;
}
