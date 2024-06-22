import React from "react";

import Swatch from "./swatch";

import { TThemeKey } from "@/types/theme";

interface SwatchRendererProps {
  variables: { [name: string]: string }[];
}

const SwatchRenderer = React.memo(({ variables }: SwatchRendererProps) => {
  return (
    <>
      {variables.map(({ name }) => {
        if (name != "radius") {
          return <Swatch key={name} variable={name as TThemeKey} />;
        }
      })}
    </>
  );
});

export default SwatchRenderer;
