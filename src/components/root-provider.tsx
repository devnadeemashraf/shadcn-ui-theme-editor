import { ThemeProvider } from "./theme-provider";
import { TooltipProvider } from "./ui/tooltip";

type RootProviderProps = {
  children: React.ReactNode;
};

const RootProvider = ({ children }: RootProviderProps) => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <TooltipProvider>{children}</TooltipProvider>
    </ThemeProvider>
  );
};

export default RootProvider;
