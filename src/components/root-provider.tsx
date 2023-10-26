import { ThemeProvider } from "./theme-provider";

type RootProviderProps = {
  children: React.ReactNode;
};

const RootProvider = ({ children }: RootProviderProps) => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      {children}
    </ThemeProvider>
  );
};

export default RootProvider;
