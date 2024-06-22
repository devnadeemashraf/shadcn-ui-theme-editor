import { convertHEXtoHSL, copyToClipboard } from "@/lib/utils";
import { TThemeState } from "@/types/theme";

export const handleOnClickCopyBtn = async (theme: TThemeState) => {
  const clipboardValue = `
    @layer base {
        :root {
            --background: ${convertHEXtoHSL(theme.background)};
            --foreground: ${convertHEXtoHSL(theme.foreground)};

            --card: ${convertHEXtoHSL(theme.card)};
            --card-foreground: ${convertHEXtoHSL(theme.card_foreground)};

            --popover: ${convertHEXtoHSL(theme.popover)};
            --popover-foreground: ${convertHEXtoHSL(theme.popover_foreground)};

            --primary: ${convertHEXtoHSL(theme.primary)};
            --primary-foreground: ${convertHEXtoHSL(theme.primary_foreground)};

            --secondary: ${convertHEXtoHSL(theme.primary_foreground)};
            --secondary-foreground: ${convertHEXtoHSL(
              theme.secondary_foreground
            )};

            --muted: ${convertHEXtoHSL(theme.muted)};
            --muted-foreground: ${convertHEXtoHSL(theme.muted_foreground)};

            --accent: ${convertHEXtoHSL(theme.accent)};
            --accent-foreground: ${convertHEXtoHSL(theme.accent_foreground)};

            --destructive: ${convertHEXtoHSL(theme.destructive)};
            --destructive-foreground: ${convertHEXtoHSL(
              theme.destructive_foreground
            )};

            --border: ${convertHEXtoHSL(theme.border)};
            --input: ${convertHEXtoHSL(theme.input)};
            --ring: ${convertHEXtoHSL(theme.ring)};

            --radius: ${theme.radius};
        }
    }
  `;
  if (await copyToClipboard(clipboardValue)) {
    return true;
  } else {
    return false;
  }
};
