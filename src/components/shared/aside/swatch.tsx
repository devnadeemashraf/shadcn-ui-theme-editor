import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { TThemeKey } from "@/types/theme";

import useSwatch from "@/hooks/useSwatch";

interface SwatchProps {
  variable: TThemeKey;
}

const Swatch = ({ variable }: SwatchProps) => {
  const { DEFAULT, value, handleOnValueChange } = useSwatch(variable);

  return (
    <div className="grid w-full items-center gap-1.5">
      <Label
        htmlFor={`color-variable-${variable}`}
        className="capitalize text-muted-foreground"
      >
        {variable.replace("_", " ")}
      </Label>
      <div
        id={`color-variable-${variable}`}
        className="w-full grid grid-cols-6 gap-2 mt-1"
      >
        <Input
          className="col-span-5 uppercase"
          value={value}
          onChange={handleOnValueChange}
          placeholder={DEFAULT}
        />
        <Input
          type="color"
          className="w-full h-10"
          value={value}
          onChange={handleOnValueChange}
        />
      </div>
    </div>
  );
};

export default Swatch;
