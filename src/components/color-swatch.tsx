import { TAppState } from "@/store";
import { useDispatch, useSelector } from "react-redux";

import { convertHEXtoHSL_Updated } from "@/lib/utils";
import { TRootProperties, TStateProperties } from "@/types/theme";
import { setThemeProperty } from "@/store/themeSlice";

type TColorSwatch = {
  storeVariable: TStateProperties;
  colorVariable: TRootProperties;
};

const ColorSwatch = ({ storeVariable, colorVariable }: TColorSwatch) => {
  const AppThemeState = useSelector((state: TAppState) => state.themeSlice);
  const dispatch = useDispatch();

  const handleChange = (eventValue: string) => {
    document
      .querySelector(":root")
      ?.style.setProperty(colorVariable, convertHEXtoHSL_Updated(eventValue));
    dispatch(setThemeProperty({ property: storeVariable, value: eventValue }));
  };

  return (
    <div className="flex items-center justify-between px-2">
      <h1 className="text-xl capitalize font-medium">{storeVariable}</h1>
      <input
        id="color-swatch"
        type="color"
        value={AppThemeState[storeVariable]}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default ColorSwatch;
