import { PropsWithChildren } from "react";

import { TooltipProvider } from "./ui/tooltip";

import { ThemeProvider } from "./themeProvider";

interface RootProviderProps extends PropsWithChildren {}

const RootProvider = ({ children }: RootProviderProps) => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="sui-theme-editor-theme">
      <TooltipProvider>{children}</TooltipProvider>
    </ThemeProvider>
  );
};

export default RootProvider;
