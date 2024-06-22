import { useCallback, useEffect } from "react";

import { selectThemeLoading } from "@/store/selectors/themeSelector";
import { setValue, toggleLoading } from "@/store/slices/themeSlice";

import { useAppDispatch, useAppSelector } from "@/hooks/useTypedRTK";

import { TCSSVariable } from "@/types/theme";
import { convertHSLtoHEX, getCurrentValueForCSSVariable } from "@/lib/utils";

import { DEFAULT_THEME_STATE, STORE_TO_CSS_VARS_MAPPING } from "@/constants";

const useAppTheme = () => {
  const loading = useAppSelector(selectThemeLoading);

  const dispatch = useAppDispatch();

  const init = useCallback(async () => {
    const themeObj = Object.assign({}, DEFAULT_THEME_STATE);

    Object.keys(themeObj).map((key) => {
      const variable = STORE_TO_CSS_VARS_MAPPING[
        key as keyof typeof STORE_TO_CSS_VARS_MAPPING
      ] as TCSSVariable;

      if (variable) {
        let value = getCurrentValueForCSSVariable(variable);
        value = key !== "radius" ? convertHSLtoHEX(value) : value;

        themeObj[key as keyof typeof DEFAULT_THEME_STATE] = value;
      }
    });

    dispatch(setValue(themeObj));
  }, [dispatch]);

  useEffect(() => {
    let timeout: string | number | NodeJS.Timeout | undefined;

    init().finally(() => {
      timeout = setTimeout(() => {
        dispatch(toggleLoading(false));
      }, 1000);
    });

    return () => clearTimeout(timeout);
  }, [init, dispatch]);

  return {
    loading,
  };
};

export default useAppTheme;
