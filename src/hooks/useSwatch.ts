/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from "react";

import { useAppSelector } from "@/hooks/useTypedRTK";
import { selectTheme } from "@/store/selectors/themeSelector";

import { getCSSEquivalentOfVariable, setValueToCSSVariable } from "@/lib/utils";

import { TThemeKey } from "@/types/theme";

const useSwatch = (variable: TThemeKey) => {
  const DEFAULT = "#000000";

  const [value, setValue] = useState(DEFAULT);
  const theme = useAppSelector(selectTheme);

  const handleOnValueChange = useCallback((e: any) => {
    setValue(e.target.value);
    setValueToCSSVariable(getCSSEquivalentOfVariable(variable), e.target.value);
  }, []);

  useEffect(() => {
    const variableValue = theme[variable as TThemeKey];
    setValue(variableValue);
  }, [theme, variable]);

  return {
    DEFAULT,
    value,
    handleOnValueChange,
  };
};

export default useSwatch;
