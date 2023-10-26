import { TAppState } from "@/store";
import { useSelector } from "react-redux";

import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import ColorSwatch from "./color-swatch";
import { TRootProperties, TStateProperties } from "@/types/theme";
import { convertHEXtoHSL_Updated } from "@/lib/utils";
import { useToast } from "./ui/use-toast";

type TSwatchMap = {
  storeVariable: TStateProperties;
  colorVariable: TRootProperties;
}[];

const SwatchMap: TSwatchMap = [
  {
    storeVariable: "primary",
    colorVariable: "--primary",
  },
  {
    storeVariable: "primary_foreground",
    colorVariable: "--primary-foreground",
  },
  {
    storeVariable: "secondary",
    colorVariable: "--secondary",
  },
  {
    storeVariable: "secondary_foreground",
    colorVariable: "--secondary-foreground",
  },
  {
    storeVariable: "background",
    colorVariable: "--background",
  },
  {
    storeVariable: "foreground",
    colorVariable: "--foreground",
  },
  {
    storeVariable: "card",
    colorVariable: "--card",
  },
  {
    storeVariable: "card_foreground",
    colorVariable: "--card-foreground",
  },
  {
    storeVariable: "popover",
    colorVariable: "--popover",
  },
  {
    storeVariable: "popover_foreground",
    colorVariable: "--popover-foreground",
  },
  {
    storeVariable: "muted",
    colorVariable: "--muted",
  },
  {
    storeVariable: "muted_foreground",
    colorVariable: "--muted-foreground",
  },
  {
    storeVariable: "accent",
    colorVariable: "--accent",
  },
  {
    storeVariable: "accent_foreground",
    colorVariable: "--accent-foreground",
  },
  {
    storeVariable: "destructive",
    colorVariable: "--destructive",
  },
  {
    storeVariable: "destructive_foreground",
    colorVariable: "--destructive-foreground",
  },
  {
    storeVariable: "border",
    colorVariable: "--border",
  },
  {
    storeVariable: "input",
    colorVariable: "--input",
  },
  {
    storeVariable: "ring",
    colorVariable: "--ring",
  },
];

const AsideThemeEdit = () => {
  const { toast } = useToast();

  const AppThemeState = useSelector((state: TAppState) => state.themeSlice);

  const handleThemeCopyOnClick = () => {
    const localCopy = AppThemeState;
    const localCopyKeys = Object.keys(localCopy);
    const resArr = [];

    for (const item of localCopyKeys) {
      const key = item as keyof typeof localCopy;
      if (key !== "radius") {
        const hslVal = convertHEXtoHSL_Updated(localCopy[key]);
        resArr.push([`--${key.replace("_", "-")}`, `${hslVal}`]);
      }
    }

    const textToCopy = `
    :root {
      ${resArr[0][0]}: ${resArr[0][1]};
      ${resArr[1][0]}: ${resArr[1][1]};
  
      ${resArr[2][0]}: ${resArr[2][1]};
      ${resArr[3][0]}: ${resArr[3][1]};
  
      ${resArr[4][0]}: ${resArr[4][1]};
      ${resArr[5][0]}: ${resArr[5][1]};
  
      ${resArr[6][0]}: ${resArr[6][1]};
      ${resArr[7][0]}: ${resArr[7][1]};
  
      ${resArr[8][0]}: ${resArr[8][1]};
      ${resArr[9][0]}: ${resArr[9][1]};
  
      ${resArr[10][0]}: ${resArr[10][1]};
      ${resArr[11][0]}: ${resArr[11][1]};
  
      ${resArr[12][0]}: ${resArr[12][1]};
      ${resArr[13][0]}: ${resArr[13][1]};
  
      ${resArr[14][0]}: ${resArr[14][1]};
      ${resArr[15][0]}: ${resArr[15][1]};
  
      ${resArr[16][0]}: ${resArr[16][1]};
      ${resArr[17][0]}: ${resArr[17][1]};
      ${resArr[18][0]}: ${resArr[18][1]};

      --radius: 1rem;
    }
    `;

    navigator.clipboard.writeText(textToCopy);
    toast({
      title: "Wohoo!",
      description: "Theme Copied to Clipboard",
    });
  };

  return (
    <aside className="max-w-[320px] w-full h-full bg-background border-r overflow-y-auto space-y-2 pb-6">
      <header className="sticky top-0 bg-background border-b w-full h-20 flex items-center justify-between gap-2 px-2 mb-4">
        {/* Edit Theme */}
        <div className="flex-1 w-full flex flex-col items-start justify-start">
          <span className="font-medium text-muted-foreground">Theme</span>
          <h1 className="text-4xl font-medium text-secondary-foreground">
            Colors
          </h1>
        </div>
        {/* Copy Code */}
        <Button onClick={handleThemeCopyOnClick} size="icon">
          <Copy className="w-4 h-4" />
        </Button>
      </header>
      {SwatchMap.map((currItem, idx) => {
        return (
          <ColorSwatch
            key={idx}
            storeVariable={currItem.storeVariable}
            colorVariable={currItem.colorVariable}
          />
        );
      })}
    </aside>
  );
};
export default AsideThemeEdit;
